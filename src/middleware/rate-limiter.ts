import { RateLimiterMemory } from 'rate-limiter-flexible';
import { Elysia } from 'elysia';

// Rate limiter configurations for resource server
const adminLimiter = new RateLimiterMemory({
  keyPrefix: 'admin_limit',
  points: 30, // Number of requests
  duration: 60, // Per 1 minute
  blockDuration: 60, // Block for 1 minute
});

const authLimiter = new RateLimiterMemory({
  keyPrefix: 'auth_limit',
  points: 10, // Number of requests
  duration: 300, // Per 5 minutes
  blockDuration: 300, // Block for 5 minutes
});

const generalLimiter = new RateLimiterMemory({
  keyPrefix: 'general_limit',
  points: 100, // Number of requests
  duration: 60, // Per 1 minute
  blockDuration: 60, // Block for 1 minute
});

export const rateLimitPlugin = (app: Elysia) => {
  return app
    .onRequest(async ({ request, set }) => {
      // Temporarily disable rate limiting in development
      if (process.env.NODE_ENV === 'development') {
        return;
      }
      
      const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';
      
      const path = new URL(request.url).pathname;
      
      try {
        // Different limits for different endpoints
        if (path.startsWith('/api/admin')) {
          await adminLimiter.consume(ip);
        } else if (path.startsWith('/api/')) {
          await authLimiter.consume(ip);
        } else {
          await generalLimiter.consume(ip);
        }
      } catch (rejRes: any) {
        const secs = Math.round(rejRes.msBeforeNext / 1000) || 1;
        set.status = 429;
        set.headers['Retry-After'] = String(secs);
        throw new Error(`Too many requests. Try again in ${secs} seconds.`);
      }
    });
};

export { adminLimiter, authLimiter, generalLimiter };
