import { hasRole, hasAnyRole, UserRole } from "../lib/jwt";

export const requireRole = (requiredRole: UserRole) => {
  return ({ user, set }: any) => {
    if (!user || !user.role) {
      console.log("❌ Role Middleware - User or user.role undefined");
      set.status = 401;
      throw new Error("Unauthorized - User not authenticated");
    }
    
    if (!hasRole(user.role, requiredRole)) {
      set.status = 403;
      throw new Error(`Forbidden - Required role: ${requiredRole}`);
    }
    return { user };
  };
};

export const requireAnyRole = (allowedRoles: UserRole[]) => {
  return ({ user, set }: any) => {
    if (!user || !user.role) {
      console.log("❌ Role Middleware - User or user.role undefined");
      set.status = 401;
      throw new Error("Unauthorized - User not authenticated");
    }
    
    if (!hasAnyRole(user.role, allowedRoles)) {
      set.status = 403;
      throw new Error(`Forbidden - Required one of roles: ${allowedRoles.join(", ")}`);
    }
    return { user };
  };
};

export const requireAdmin = requireRole("admin");
export const requireMedic = requireRole("medic");
export const requirePacient = requireRole("pacient");
