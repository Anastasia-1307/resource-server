import { Elysia } from "elysia";
import { authMiddleware } from "../middleware/auth-middleware";
import { requireAdmin } from "../middleware/role-middleware";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const adminRoutes = new Elysia({ prefix: "/api" })
  // Public OAuth user sync endpoint (no auth required)
  .post("/admin/sync-oauth-user", async ({ body, headers }) => {
    console.log("🔍 Public OAuth Sync - Request received");
    
    const auth = headers.authorization;
    if (!auth || !auth.startsWith("Bearer ")) {
      console.log("🔍 Public OAuth Sync - Missing or invalid authorization header");
      set.status = 401;
      throw new Error("Missing or invalid authorization header");
    }

    const token = auth.slice(7);
    console.log("🔍 Public OAuth Sync - Token extracted:", token.substring(0, 20) + "...");

    try {
      // Verify JWT token
      const { verifyToken } = await import("../lib/jwt");
      const payload = await verifyToken(token);
      
      console.log("🔍 Public OAuth Sync - JWT Verification SUCCESS:", payload);
      
      if (!payload.sub || !payload.email) {
        console.log("🔍 Public OAuth Sync - Invalid token payload");
        set.status = 401;
        throw new Error("Invalid token payload");
      }

      // Check if user already exists
      let user = await prisma.users.findUnique({
        where: { id: payload.sub }
      });

      if (user) {
        console.log("🔍 Public OAuth Sync - User already exists:", user.email);
        return { message: "User already exists", user: { id: user.id, email: user.email, role: user.role } };
      }

      // Create new user
      console.log("🔍 Public OAuth Sync - Creating new user...");
      user = await prisma.users.create({
        data: {
          id: payload.sub,
          email: payload.email,
          username: payload.name || payload.email,
          password_hash: "oauth_placeholder", // OAuth users don't have passwords
          role: payload.role || 'pacient',
        }
      });

      console.log("✅ Public OAuth Sync - User created successfully:", user.email);
      return { message: "User synced successfully", user: { id: user.id, email: user.email, role: user.role } };
      
    } catch (error) {
      console.log("❌ Public OAuth Sync - Error:", error);
      set.status = 401;
      throw new Error("Invalid token or sync failed");
    }
  })
  .derive(authMiddleware)
  .derive(requireAdmin)
  .get("/admin", ({ user }) => ({
    message: "Welcome admin",
    user: {
      id: user.id,
      email: user.email,
      username: user.username,
      role: user.role,
    },
    timestamp: new Date().toISOString(),
  }))
  
  // Sync OAuth user to resource server
  .post("/admin/sync-oauth-user", async ({ user }) => {
    try {
      // Check if user already exists
      const existingUser = await prisma.users.findUnique({
        where: { id: user.id }
      });
      
      if (existingUser) {
        return { 
          message: "User already exists", 
          user: existingUser 
        };
      }
      
      // Create user from OAuth payload
      const newUser = await prisma.users.create({
        data: {
          id: user.id,
          email: user.email,
          username: user.username || user.email.split('@')[0],
          role: user.role || "admin",
          password_hash: "oauth_user_no_password"
        }
      });
      
      console.log("✅ OAuth user synced:", newUser);
      
      return { 
        message: "OAuth user synced successfully", 
        user: newUser 
      };
    } catch (error) {
      console.log("❌ Error syncing OAuth user:", error);
      throw new Error("Failed to sync OAuth user");
    }
  })
  
  // Get all users with their role-specific data
  .get("/admin/users", async () => {
    console.log("🔍 Admin Routes - GET /admin/users called");
    try {
      const users = await prisma.users.findMany({
        include: {
          patient: true,
          doctor: true,
        },
        orderBy: {
          created_at: 'desc'
        }
      });
      
      console.log("🔍 Admin Routes - Users found:", users.length);
      
      const result = {
        users: users.map(user => ({
          id: user.id,
          email: user.email,
          username: user.username,
          role: user.role,
          created_at: user.created_at,
          patient: user.patient,
          doctor: user.doctor
        })),
        total: users.length
      };
      
      console.log("🔍 Admin Routes - Returning:", result);
      return result;
    } catch (error) {
      console.log("❌ Admin Routes - Error:", error);
      throw error;
    }
  })
  
  // Update user role
  .put("/admin/users/:id", async ({ params, body }) => {
    const { role } = body as { role: string };
    
    const user = await prisma.users.update({
      where: { id: params.id },
      data: { role }
    });
    
    return { message: "User role updated successfully", user };
  })
  
  // Delete user
  .delete("/admin/users/:id", async ({ params }) => {
    await prisma.users.delete({
      where: { id: params.id }
    });
    
    return { message: "User deleted successfully" };
  })
  
  // Create new user
  .post("/admin/users", async ({ body }) => {
    const { email, username, password, role } = body as {
      email: string;
      username: string;
      password: string;
      role: string;
    };
    
    const user = await prisma.users.create({
      data: {
        email,
        username,
        password_hash: password, // Should be hashed in real implementation
        role,
      }
    });
    
    return { message: "User created successfully", user };
  })
  
  // Database statistics
  .get("/admin/stats", async () => {
    console.log("🔍 Admin Routes - GET /admin/stats called");
    try {
      const [usersCount, patientsCount, doctorsCount, appointmentsCount, recordsCount] = await Promise.all([
        prisma.users.count(),
        prisma.users.count({ where: { role: 'pacient' } }),
        prisma.users.count({ where: { role: 'medic' } }),
        prisma.appointment.count(),
        prisma.medicalRecord.count()
      ]);
      
      const result = {
        stats: {
          users: usersCount,
          patients: patientsCount,
          doctors: doctorsCount,
          appointments: appointmentsCount,
          medicalRecords: recordsCount
        }
      };
      
      console.log("🔍 Admin Routes - Stats result:", result);
      return result;
    } catch (error) {
      console.log("❌ Admin Routes - Stats error:", error);
      throw error;
    }
  });
