import dotenv from "dotenv";

dotenv.config();

console.log("🔍 Resource Server Config:", {
  issuer: process.env.ISSUER || "http://localhost:4000",
  audience: process.env.AUDIENCE || "nextjs_client",
  jwksUrl: process.env.JWKS_URL || "http://localhost:4000/.well-known/jwks.json"
});

export const config = {
  server: {
    port: parseInt(process.env.PORT || "5000"),
  },
  auth: {
    issuer: process.env.ISSUER || "http://localhost:4000",
    audience: process.env.AUDIENCE || "nextjs_client",
    jwksUrl: process.env.JWKS_URL || "http://localhost:4000/.well-known/jwks.json",
  },
  database: {
    url: process.env.DATABASE_URL,
  },
} as const;
