// @ts-nocheck
import { Elysia } from 'elysia';
import { UserActivityService, UserAction } from '../services/user-activity-service';
import { activityLoggingMiddleware, activityLoggingAfterHook, logActivity } from '../middleware/activity-logging-middleware';
import { authMiddleware } from '../middleware/auth-middleware';

// Exemplu de integrare a logging-ului în aplicația Elysia
export const createAppWithLogging = () => {
  return new Elysia()
    // Middleware pentru logging (rulează înainte de auth)
    .use(activityLoggingMiddleware)
    
    // Middleware pentru autentificare
    .use(authMiddleware)
    
    // Exemplu rută de login cu logging manual
    .post('/auth/login', async ({ body, store, set }) => {
      const { email, password } = body as { email: string; password: string };
      
      try {
        // Logica de autentificare...
        const user = await authenticateUser(email, password);
        
        if (user) {
          // Logging automat al login-ului reușit
          await UserActivityService.logLogin(
            user.id, 
            store.activityContext?.ipAddress,
            store.activityContext?.userAgent
          );
          
          return { success: true, user };
        } else {
          // Logging al eșecului
          await UserActivityService.logFailedLogin(
            email,
            store.activityContext?.ipAddress,
            store.activityContext?.userAgent,
            'Invalid credentials'
          );
          
          set.status = 401;
          return { success: false, error: 'Invalid credentials' };
        }
      } catch (error) {
        await UserActivityService.logFailedLogin(
          email,
          store.activityContext?.ipAddress,
          store.activityContext?.userAgent,
          'Server error'
        );
        
        set.status = 500;
        return { success: false, error: 'Server error' };
      }
    })
    
    // Exemplu rută pentru programări cu logging
    .post('/programari', async ({ body, store, set }) => {
      const { serviciu, data_programare, observatii } = body;
      const user = store.user;
      
      try {
        // Creare programare...
        const programare = await createProgramare({
          user_id: user.id,
          serviciu,
          data_programare,
          observatii,
        });
        
        // Logging manual al acțiunii (pe lângă cel automat)
        await logActivity(store, UserAction.CREATE_PROGRAMARE, {
          programareId: programare.id,
          serviciu,
          data_programare,
        });
        
        set.status = 201;
        return { success: true, programare };
      } catch (error) {
        set.status = 400;
        return { success: false, error: 'Failed to create programare' };
      }
    })
    
    // Exemplu rută admin pentru management utilizatori
    .put('/admin/users/:userId', async ({ params, body, store, set }) => {
      const { userId } = params;
      const { email, role, isActive } = body;
      const admin = store.user;
      
      try {
        // Verificare permisiuni admin...
        if (admin.role !== 'admin') {
          await logActivity(store, UserAction.UNAUTHORIZED_ACCESS, {
            targetUserId: userId,
            attemptedAction: 'UPDATE_USER',
          });
          
          set.status = 403;
          return { success: false, error: 'Admin access required' };
        }
        
        // Actualizare utilizator...
        const updatedUser = await updateUser(userId, { email, role, isActive });
        
        // Logging acțiune admin
        await UserActivityService.logAdminUserAction(
          UserAction.ADMIN_UPDATE_USER,
          admin.id,
          userId,
          { changes: { email, role, isActive } }
        );
        
        return { success: true, user: updatedUser };
      } catch (error) {
        set.status = 400;
        return { success: false, error: 'Failed to update user' };
      }
    })
    
    // Rută pentru vizualizare log-uri (admin only)
    .get('/admin/logs', async ({ store, query, set }) => {
      const admin = store.user;
      const { limit = 100, offset = 0, action } = query;
      
      // Verificare permisiuni
      if (admin.role !== 'admin') {
        set.status = 403;
        return { success: false, error: 'Admin access required' };
      }
      
      try {
        const logs = await UserActivityService.getAllActivity(
          parseInt(limit),
          parseInt(offset),
          action as UserAction
        );
        
        return { success: true, logs };
      } catch (error) {
        set.status = 500;
        return { success: false, error: 'Failed to fetch logs' };
      }
    })
    
    // Rută pentru statistici (admin only)
    .get('/admin/logs/stats', async ({ store, query, set }) => {
      const admin = store.user;
      const { days = 30 } = query;
      
      if (admin.role !== 'admin') {
        set.status = 403;
        return { success: false, error: 'Admin access required' };
      }
      
      try {
        const stats = await UserActivityService.getActivityStats(parseInt(days));
        return { success: true, stats };
      } catch (error) {
        set.status = 500;
        return { success: false, error: 'Failed to fetch stats' };
      }
    });
};

// Funcții mock pentru exemplu
async function authenticateUser(email: string, password: string) {
  // Implementare reală ar fi aici...
  return { id: 'user-123', email, role: 'user' };
}

async function createProgramare(data: any) {
  // Implementare reală ar fi aici...
  return { id: 1, ...data };
}

async function updateUser(userId: string, data: any) {
  // Implementare reală ar fi aici...
  return { id: userId, ...data };
}
