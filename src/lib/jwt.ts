import { jwtVerify, createRemoteJWKSet, JWTPayload } from "jose";
import { config } from "./config";

const JWKS = createRemoteJWKSet(new URL(config.auth.jwksUrl));

export async function verifyToken(token: string): Promise<JWTPayload> {
  console.log("🔍 JWT Verification - Token:", token.substring(0, 20) + "...");
  console.log("🔍 JWT Verification - Config:", {
    issuer: config.auth.issuer,
    audience: config.auth.audience,
    jwksUrl: config.auth.jwksUrl
  });
  
  try {
    const { payload } = await jwtVerify(token, JWKS, {
      issuer: config.auth.issuer,
      audience: config.auth.audience,
    });
    
    console.log("🔍 JWT Verification - Success:", payload);
    return payload;
  } catch (error) {
    console.log("❌ JWT Verification - Error:", error);
    throw error;
  }
}

export interface AuthUser {
  id: string;
  email: string;
  username: string;
  role: string | null;
}

export type UserRole = "admin" | "medic" | "pacient";

export function hasRole(userRole: string | null, requiredRole: UserRole): boolean {
  return userRole === requiredRole;
}

export function hasAnyRole(userRole: string | null, allowedRoles: UserRole[]): boolean {
  return allowedRoles.includes(userRole as UserRole);
}
