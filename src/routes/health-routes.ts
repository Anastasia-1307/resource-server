import { Elysia } from "elysia";
import { config } from "../lib/config";

export const healthRoutes = new Elysia({ prefix: "/api" })
  .get("/health", () => ({
    status: "ok",
    timestamp: new Date().toISOString(),
    server: {
      port: config.server.port,
      environment: process.env.NODE_ENV || "development",
    },
    uptime: process.uptime(),
  }));
