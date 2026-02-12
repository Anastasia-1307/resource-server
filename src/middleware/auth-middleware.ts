import { verifyToken, AuthUser } from "../lib/jwt";
import { UserService } from "../services/user-service";
import prisma from "../lib/prisma";

export const authMiddleware = async ({ request, set }: any) => {
  console.log("🔍 Auth Middleware - Request received");
  
  if (!request || !request.headers) {
    console.log("❌ Auth Middleware - Request or headers undefined");
    set.status = 400;
    throw new Error("Invalid request - missing headers");
  }
  
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

    // Skip database lookup - use JWT payload directly
    // The token is already verified by auth server, so we can trust the payload
    const user = {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      role: payload.role
    };

    console.log(" Auth Middleware - User from JWT:", user);
    
    // Attach user to request context for onRequest middleware
    // Don't return anything to avoid response interference
    request.user = user;
  } catch (error) {
    console.log(" Auth Middleware - Error:", error);
    set.status = 401;
    throw new Error("Not authorized - Invalid token");
  }
};
