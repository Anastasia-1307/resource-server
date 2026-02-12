import { hasRole, hasAnyRole, UserRole } from "../lib/jwt";

export const requireRole = (requiredRole: UserRole) => {
  return ({ request, set }: any) => {
    const user = request.user;
    
    if (!user || !user.role) {
      console.log("❌ Role Middleware - User or user.role undefined");
      set.status = 401;
      throw new Error("Unauthorized - User not authenticated");
    }
    
    if (!hasRole(user.role, requiredRole)) {
      set.status = 403;
      throw new Error(`Forbidden - Required role: ${requiredRole}`);
    }
  };
};

export const requireAnyRole = (allowedRoles: UserRole[]) => {
  return ({ request, set }: any) => {
    const user = request.user;
    
    if (!user || !user.role) {
      console.log("❌ Role Middleware - User or user.role undefined");
      set.status = 401;
      throw new Error("Unauthorized - User not authenticated");
    }
    
    if (!hasAnyRole(user.role, allowedRoles)) {
      set.status = 403;
      throw new Error(`Forbidden - Required one of roles: ${allowedRoles.join(", ")}`);
    }
  };
};

export const requireAdmin = requireRole("admin");
export const requireMedic = requireRole("medic");
export const requirePacient = requireRole("pacient");
