import { verifyToken, AuthUser } from "../lib/jwt";
import { UserService } from "../services/user-service";
import prisma from "../lib/prisma";

export const authMiddleware = async ({ request, set }: any) => {
  console.log("🔍 Auth Middleware - Request received");
  
  const auth = request.headers.get("authorization");
  console.log("🔍 Auth Middleware - Authorization header:", auth?.substring(0, 20) + "...");

  if (!auth?.startsWith("Bearer ")) {
    console.log("❌ Auth Middleware - Missing or invalid token format");
    set.status = 401;
    throw new Error("Not authorized - Missing or invalid token format");
  }

  const token = auth.slice(7);
  console.log("🔍 Auth Middleware - Token extracted:", token.substring(0, 20) + "...");

  try {
    // Verify JWT token
    console.log("🔍 Auth Middleware - Verifying token...");
    console.log("🔍 Auth Middleware - Token:", token.substring(0, 50) + "...");
    console.log("🔍 Auth Middleware - Token length:", token.length);
    
    const payload = await verifyToken(token);
    
    console.log("🔍 Auth Middleware - JWT Verification SUCCESS:", payload);
    
    if (!payload.sub) {
      console.log(" Auth Middleware - Invalid token subject");
      set.status = 401;
      throw new Error("Not authorized - Invalid token subject");
    }

    console.log(" Auth Middleware - Token verified successfully:", payload);

    // Get user from database
    console.log(" Auth Middleware - Finding user:", payload.sub);
    let user = await UserService.findUserById(payload.sub);
    
    if (!user) {
      console.log(" Auth Middleware - User not found in resource server database");
      console.log(" Auth Middleware - Expected user ID:", payload.sub);
      console.log(" Auth Middleware - Expected email:", payload.email);
      throw new Error("User not found in resource server. Please ensure user exists in resource server database.");
    }

    console.log(" Auth Middleware - User found:", user);
    return { user };
  } catch (error) {
    console.log(" Auth Middleware - Error:", error);
    set.status = 401;
    throw new Error("Not authorized - Invalid token");
  }
};
