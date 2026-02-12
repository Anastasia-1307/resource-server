import { verifyToken, AuthUser } from "../lib/jwt";
import { UserService } from "../services/user-service";
import prisma from "../lib/prisma";

export const authMiddleware = async ({ request, set }: any) => {
  console.log(" AUTH MIDDLEWARE - Request received:", request.method, request.url);
  
  const auth = request.headers.get("authorization");

  if (!auth?.startsWith("Bearer ")) {
    set.status = 401;
    throw new Error("Not authorized");
  }

  const token = auth.slice(7);

  try {
    const payload = await verifyToken(token);

    if (!payload.sub) {
      set.status = 401;
      throw new Error("Invalid token subject");
    }

    const user = {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      role: payload.role
    };

    console.log(" AUTH MIDDLEWARE - User authenticated:", user);
    
    // Return user context for Elysia derive
    return {
      user
    };

  } catch (error) {
    console.log(" AUTH MIDDLEWARE - Error:", error);
    set.status = 401;
    throw new Error("Not authorized - Invalid token");
  }
};