import { Elysia } from "elysia";

export const errorHandler = new Elysia({ name: "error-handler" })
  .onError(({ error, set, code }) => {
    const errorMessage = error instanceof Error ? error.message : String(error);
    
    console.error("Error occurred:", {
      error: errorMessage,
      code,
      timestamp: new Date().toISOString(),
    });

    switch (code) {
      case "VALIDATION":
        set.status = 400;
        return {
          error: "Validation failed",
          message: errorMessage,
          timestamp: new Date().toISOString(),
        };

      case "NOT_FOUND":
        set.status = 404;
        return {
          error: "Resource not found",
          timestamp: new Date().toISOString(),
        };

      case "INTERNAL_SERVER_ERROR":
        set.status = 500;
        return {
          error: "Internal server error",
          timestamp: new Date().toISOString(),
        };

      default:
        // Handle our custom auth/role errors
        if (errorMessage.includes("Not authorized")) {
          set.status = 401;
          return {
            error: "Unauthorized",
            message: errorMessage,
            timestamp: new Date().toISOString(),
          };
        }

        if (errorMessage.includes("Forbidden")) {
          set.status = 403;
          return {
            error: "Forbidden",
            message: errorMessage,
            timestamp: new Date().toISOString(),
          };
        }

        set.status = 500;
        return {
          error: "An unexpected error occurred",
          message: process.env.NODE_ENV === "development" ? errorMessage : "Internal server error",
          timestamp: new Date().toISOString(),
        };
    }
  });
