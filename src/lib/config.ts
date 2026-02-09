import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: '.env' });

console.log("🔍 Resource Server Config:", {
  DATABASE_URL: process.env.DATABASE_URL ? "SET" : "NOT SET",
  issuer: process.env.JWT_ISSUER || "http://localhost:4000",
  audience: process.env.JWT_AUDIENCE || "nextjs_client", // Forced to match auth server tokens
  jwksUrl: process.env.JWT_ISSUER ? `${process.env.JWT_ISSUER}/.well-known/jwks.json` : "http://localhost:4000/.well-known/jwks.json"
});

export const config = {
  server: {
    port: parseInt(process.env.PORT || "5000"),
  },
  auth: {
    issuer: process.env.JWT_ISSUER || "http://localhost:4000",
    audience: "nextjs_client", // Force the correct audience to match auth server tokens
    jwksUrl: process.env.JWT_ISSUER ? `${process.env.JWT_ISSUER}/.well-known/jwks.json` : "http://localhost:4000/.well-known/jwks.json",
  },
  database: {
    url: process.env.DATABASE_URL,
  },
} as const;
