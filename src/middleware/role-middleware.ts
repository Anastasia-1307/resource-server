import { hasRole, hasAnyRole, UserRole } from "../lib/jwt";

export const requireRole = (requiredRole: UserRole) => {
  return ({ request, set }: any) => {
    console.log(`🔍 ROLE MIDDLEWARE - Checking role: ${requiredRole}`);
    console.log(`🔍 ROLE MIDDLEWARE - User:`, request.user);
    
    const user = request.user;
    
    if (!user || !user.role) {
      console.log("❌ Role Middleware - User or user.role undefined");
      set.status = 401;
      throw new Error("Unauthorized - User not authenticated");
    }
    
    console.log(`🔍 ROLE MIDDLEWARE - User role: ${user.role}, Required: ${requiredRole}`);
    console.log(`🔍 ROLE MIDDLEWARE - hasRole result:`, hasRole(user.role, requiredRole));
    
    if (!hasRole(user.role, requiredRole)) {
      console.log(`❌ Role Middleware - Role check failed for ${requiredRole}`);
      set.status = 403;
      throw new Error(`Forbidden - Required role: ${requiredRole}`);
    }
    
    console.log(`✅ Role Middleware - Role check passed for ${requiredRole}`);
  };
};

export const requireAnyRole = (allowedRoles: UserRole[]) => {
  return ({ request, set }: any) => {
    console.log(`🔍 ROLE MIDDLEWARE - Checking any of roles: ${allowedRoles.join(", ")}`);
    console.log(`🔍 ROLE MIDDLEWARE - User:`, request.user);
    
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
    
    console.log(`✅ Role Middleware - Role check passed for ${user.role}`);
  };
};

export const requireAdmin = requireRole("admin");
export const requireMedic = requireRole("medic");
export const requirePacient = requireRole("pacient");
