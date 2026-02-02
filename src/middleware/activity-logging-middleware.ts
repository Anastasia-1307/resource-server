import { UserActivityService, UserAction } from '../services/user-activity-service';

export interface ActivityContext {
  userId?: string;
  action?: UserAction;
  resource?: string;
  details?: Record<string, any>;
}

/**
 * Middleware to automatically log user activity
 * This should be called after auth middleware to have access to user info
 */
export const activityLoggingMiddleware = async ({ request, set, store }: any) => {
  const startTime = Date.now();
  
  // Get user info from auth middleware if available
  const user = store?.user;
  const userId = user?.id;
  
  // Extract request info
  const method = request.method;
  const path = new URL(request.url).pathname;
  const ipAddress = request.headers.get('x-forwarded-for') || 
                   request.headers.get('x-real-ip') || 
                   'unknown';
  const userAgent = request.headers.get('user-agent') || 'unknown';
  
  // Store activity context for later use in routes
  store.activityContext = {
    userId,
    resource: path,
    ipAddress,
    userAgent,
  };
  
  return {
    userId,
    method,
    path,
    ipAddress,
    userAgent,
    startTime,
  };
};

/**
 * After hook to log completed requests
 */
export const activityLoggingAfterHook = async ({ request, set, store }: any, context: any) => {
  const user = store?.user;
  const userId = user?.id;
  
  // Log successful requests
  if (set.status < 400) {
    const action = getActionFromRequest(context.method, context.path, set.status);
    
    if (action) {
      await UserActivityService.logActivity({
        userId,
        action,
        resource: context.path,
        ipAddress: context.ipAddress,
        userAgent: context.userAgent,
        details: {
          method: context.method,
          statusCode: set.status,
          duration: Date.now() - context.startTime,
        },
      });
    }
  }
};

/**
 * Determine action type from HTTP method and path
 */
function getActionFromRequest(method: string, path: string, statusCode: number): UserAction | null {
  // Don't log GET requests for static content or health checks
  if (method === 'GET' && (path.startsWith('/health') || path.startsWith('/static'))) {
    return null;
  }
  
  // Authentication endpoints
  if (path.includes('/auth/login')) {
    return statusCode === 200 ? UserAction.USER_LOGIN : UserAction.FAILED_LOGIN;
  }
  if (path.includes('/auth/register')) {
    return statusCode === 201 ? UserAction.USER_REGISTER : UserAction.FAILED_REGISTER;
  }
  if (path.includes('/auth/logout')) {
    return UserAction.USER_LOGOUT;
  }
  
  // Programari endpoints
  if (path.includes('/programari')) {
    switch (method) {
      case 'POST':
        return UserAction.CREATE_PROGRAMARE;
      case 'PUT':
      case 'PATCH':
        return UserAction.UPDATE_PROGRAMARE;
      case 'DELETE':
        return UserAction.CANCEL_PROGRAMARE;
      default:
        return null;
    }
  }
  
  // Admin user management
  if (path.includes('/admin/users')) {
    switch (method) {
      case 'POST':
        return UserAction.ADMIN_CREATE_USER;
      case 'PUT':
      case 'PATCH':
        return UserAction.ADMIN_UPDATE_USER;
      case 'DELETE':
        return UserAction.ADMIN_DELETE_USER;
      default:
        return null;
    }
  }
  
  // Medical records
  if (path.includes('/medical-records')) {
    switch (method) {
      case 'POST':
        return UserAction.CREATE_MEDICAL_RECORD;
      case 'PUT':
      case 'PATCH':
        return UserAction.UPDATE_MEDICAL_RECORD;
      case 'GET':
        return UserAction.ACCESS_MEDICAL_RECORDS;
      default:
        return null;
    }
  }
  
  // Patient data access
  if (path.includes('/patients') && method === 'GET') {
    return UserAction.ACCESS_PATIENT_DATA;
  }
  
  return null;
}

/**
 * Helper function to log activity from within routes
 */
export const logActivity = async (
  store: any,
  action: UserAction,
  details?: Record<string, any>
) => {
  const context: ActivityContext = store?.activityContext || {};
  
  await UserActivityService.logActivity({
    ...context,
    action,
    details,
  });
};

/**
 * Helper function to log failed access attempts
 */
export const logUnauthorizedAccess = async (
  store: any,
  reason: string
) => {
  const context: ActivityContext = store?.activityContext || {};
  
  await UserActivityService.logActivity({
    ...context,
    action: UserAction.UNAUTHORIZED_ACCESS,
    details: { reason },
  });
};
