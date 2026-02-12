import { Elysia } from "elysia";
import { openapi } from "@elysiajs/openapi";
import { cors } from "@elysiajs/cors";
import { config } from "./lib/config";
import { errorHandler } from "./middleware/error-middleware";
import { rateLimitPlugin } from "./middleware/rate-limiter";
import { pacientRoutes } from "./routes/pacient-routes";
import { medicRoutes } from "./routes/medic-routes";
import { adminRoutes } from "./routes/admin-routes";
import { healthRoutes } from "./routes/health-routes";
import { syncRoutes } from "./routes/sync-routes";

const app = new Elysia()
  .onRequest(({ request, set }) => {
    const logData = {
      method: request.method,
      url: request.url,
      pathname: new URL(request.url).pathname,
      headers: Object.fromEntries(request.headers.entries())
    };
    console.log("🔍 Request received:", logData);
  })
  .use(cors({
    origin: ["http://localhost:3000", "http://localhost:3000/admin"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
  }))
  .use(rateLimitPlugin)
  .use(openapi())
  .use(errorHandler)
  .use(adminRoutes)
  .use(medicRoutes)
  .use(pacientRoutes)
  .use(syncRoutes)
  .use(healthRoutes)
  .listen(config.server.port);

console.log(`✅ Resource Server running on http://localhost:${config.server.port}`);
console.log(`📚 OpenAPI documentation: http://localhost:${config.server.port}/swagger`);
