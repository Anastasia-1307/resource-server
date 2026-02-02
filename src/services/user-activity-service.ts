import prisma from '../lib/prisma';
import { logger } from '../lib/logger';

export enum UserAction {
  // Authentication
  USER_REGISTER = 'USER_REGISTER',
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
  PASSWORD_CHANGE = 'PASSWORD_CHANGE',
  PASSWORD_RESET = 'PASSWORD_RESET',
  
  // User Management (Admin)
  ADMIN_CREATE_USER = 'ADMIN_CREATE_USER',
  ADMIN_UPDATE_USER = 'ADMIN_UPDATE_USER',
  ADMIN_DELETE_USER = 'ADMIN_DELETE_USER',
  ADMIN_ACTIVATE_USER = 'ADMIN_ACTIVATE_USER',
  ADMIN_DEACTIVATE_USER = 'ADMIN_DEACTIVATE_USER',
  
  // Programări
  CREATE_PROGRAMARE = 'CREATE_PROGRAMARE',
  UPDATE_PROGRAMARE = 'UPDATE_PROGRAMARE',
  CANCEL_PROGRAMARE = 'CANCEL_PROGRAMARE',
  CONFIRM_PROGRAMARE = 'CONFIRM_PROGRAMARE',
  DELETE_PROGRAMARE = 'DELETE_PROGRAMARE',
  
  // Medical Data Access
  ACCESS_PATIENT_DATA = 'ACCESS_PATIENT_DATA',
  ACCESS_MEDICAL_RECORDS = 'ACCESS_MEDICAL_RECORDS',
  CREATE_MEDICAL_RECORD = 'CREATE_MEDICAL_RECORD',
  UPDATE_MEDICAL_RECORD = 'UPDATE_MEDICAL_RECORD',
  
  // System Actions
  EXPORT_DATA = 'EXPORT_DATA',
  IMPORT_DATA = 'IMPORT_DATA',
  SYSTEM_CONFIG_CHANGE = 'SYSTEM_CONFIG_CHANGE',
  
  // Failed Actions
  FAILED_LOGIN = 'FAILED_LOGIN',
  FAILED_REGISTER = 'FAILED_REGISTER',
  UNAUTHORIZED_ACCESS = 'UNAUTHORIZED_ACCESS',
}

export interface ActivityLogOptions {
  userId?: string;
  action: UserAction;
  resource?: string;
  ipAddress?: string;
  userAgent?: string;
  details?: Record<string, any>;
}

export class UserActivityService {
  /**
   * Log user activity to database and console
   */
  static async logActivity(options: ActivityLogOptions): Promise<void> {
    try {
      const { userId, action, resource, ipAddress, userAgent, details } = options;
      
      // Save to database
      await prisma.user_logs.create({
        data: {
          user_id: userId,
          action,
          resource,
          ip_address: ipAddress,
          user_agent: userAgent,
          details: details || {},
        },
      });
      
      // Also log to console for immediate visibility
      logger.auth(action, userId || 'anonymous', {
        resource,
        ipAddress,
        userAgent: userAgent?.substring(0, 100), // Truncate for console
        details,
      });
      
    } catch (error) {
      // Log error but don't throw to avoid breaking main flow
      logger.error('Failed to log user activity', {
        error: error instanceof Error ? error.message : 'Unknown error',
        options,
      });
    }
  }
  
  /**
   * Log successful login
   */
  static async logLogin(userId: string, ipAddress?: string, userAgent?: string): Promise<void> {
    await this.logActivity({
      userId,
      action: UserAction.USER_LOGIN,
      resource: '/auth/login',
      ipAddress,
      userAgent,
      details: { timestamp: new Date().toISOString() },
    });
  }
  
  /**
   * Log failed login attempt
   */
  static async logFailedLogin(email: string, ipAddress?: string, userAgent?: string, reason?: string): Promise<void> {
    await this.logActivity({
      action: UserAction.FAILED_LOGIN,
      resource: '/auth/login',
      ipAddress,
      userAgent,
      details: { 
        email,
        reason,
        timestamp: new Date().toISOString(),
      },
    });
  }
  
  /**
   * Log user registration
   */
  static async logRegistration(userId: string, email: string, ipAddress?: string, userAgent?: string): Promise<void> {
    await this.logActivity({
      userId,
      action: UserAction.USER_REGISTER,
      resource: '/auth/register',
      ipAddress,
      userAgent,
      details: { 
        email,
        timestamp: new Date().toISOString(),
      },
    });
  }
  
  /**
   * Log programare actions
   */
  static async logProgramareAction(
    action: UserAction.CREATE_PROGRAMARE | UserAction.UPDATE_PROGRAMARE | UserAction.CANCEL_PROGRAMARE | UserAction.CONFIRM_PROGRAMARE | UserAction.DELETE_PROGRAMARE,
    userId: string,
    programareId: number,
    details?: Record<string, any>
  ): Promise<void> {
    await this.logActivity({
      userId,
      action,
      resource: `/programari/${programareId}`,
      details: {
        programareId,
        ...details,
      },
    });
  }
  
  /**
   * Log admin user management actions
   */
  static async logAdminUserAction(
    action: UserAction.ADMIN_CREATE_USER | UserAction.ADMIN_UPDATE_USER | UserAction.ADMIN_DELETE_USER | UserAction.ADMIN_ACTIVATE_USER | UserAction.ADMIN_DEACTIVATE_USER,
    adminId: string,
    targetUserId: string,
    details?: Record<string, any>
  ): Promise<void> {
    await this.logActivity({
      userId: adminId,
      action,
      resource: `/admin/users/${targetUserId}`,
      details: {
        targetUserId,
        ...details,
      },
    });
  }
  
  /**
   * Get user activity history
   */
  static async getUserActivity(
    userId: string,
    limit: number = 50,
    offset: number = 0
  ) {
    return await prisma.user_logs.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      take: limit,
      skip: offset,
      include: {
        users: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
      },
    });
  }
  
  /**
   * Get all activity logs (admin)
   */
  static async getAllActivity(
    limit: number = 100,
    offset: number = 0,
    action?: UserAction
  ) {
    const where = action ? { action } : {};
    
    return await prisma.user_logs.findMany({
      where,
      orderBy: { created_at: 'desc' },
      take: limit,
      skip: offset,
      include: {
        users: {
          select: {
            id: true,
            email: true,
            username: true,
          },
        },
      },
    });
  }
  
  /**
   * Get activity statistics
   */
  static async getActivityStats(days: number = 30) {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    
    const [totalLogs, actionCounts, userCounts] = await Promise.all([
      prisma.user_logs.count({
        where: {
          created_at: { gte: startDate },
        },
      }),
      prisma.user_logs.groupBy({
        by: ['action'],
        where: {
          created_at: { gte: startDate },
        },
        _count: {
          action: true,
        },
      }),
      prisma.user_logs.groupBy({
        by: ['user_id'],
        where: {
          created_at: { gte: startDate },
          user_id: { not: null },
        },
        _count: {
          user_id: true,
        },
      }),
    ]);
    
    return {
      totalLogs,
      actionCounts: actionCounts.reduce((acc: Record<string, number>, item: any) => {
        acc[item.action] = item._count.action;
        return acc;
      }, {} as Record<string, number>),
      activeUsers: userCounts.length,
    };
  }
}
