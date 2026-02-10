// @ts-nocheck
import { Elysia } from "elysia";
import { authMiddleware } from "../middleware/auth-middleware";
import { requireAdmin } from "../middleware/role-middleware";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const adminRoutes = new Elysia({ prefix: "/api" })
  // Public OAuth user sync endpoint (no auth required)
  .post("/admin/sync-oauth-user", async ({ body, headers, set }) => {
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
  // Apply auth middleware to protected admin routes
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
  
  // Get all users with their role-specific data
  .get("/admin/users", async ({ set, store }) => {
    console.log("🔍 Admin Routes - GET /admin/users called");
    try {
      const users = await prisma.users.findMany({
        include: {
         programari: true,
        refresh_tokens: true,
    sessions: true,
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
          medic_info: user.medic_info
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
  })
  
  // Get user logs
  .get("/admin/logs", async () => {
    console.log("🔍 Admin Routes - GET /admin/logs called");
    try {
      const logs = await prisma.user_logs.findMany({
        orderBy: {
          created_at: 'desc'
        },
        take: 100 // Limit to last 100 logs
      });
      
      console.log("🔍 Admin Routes - Logs found:", logs.length);
      return logs;
    } catch (error) {
      console.log("❌ Admin Routes - Logs error:", error);
      throw error;
    }
  })
  
  // Get OAuth users
  .get("/admin/oauth-users", async () => {
    console.log("🔍 Admin Routes - GET /admin/oauth-users called");
    try {
      const oauthUsers = await prisma.oauth_users.findMany({
        orderBy: {
          created_at: 'desc'
        }
      });
      
      console.log("🔍 Admin Routes - OAuth users found:", oauthUsers.length);
      return oauthUsers;
    } catch (error) {
      console.log("❌ Admin Routes - OAuth users error:", error);
      // Return empty array if table doesn't exist or has no data
      return [];
    }
  })
  
  // Get medic info
  .get("/admin/medic-info", async () => {
    console.log("🔍 Admin Routes - GET /admin/medic-info called");
    try {
      const medicInfo = await prisma.medic_info.findMany({
        include: {
          specialitati: true
        },
        orderBy: {
          created_at: 'desc'
        }
      });
      
      console.log("🔍 Admin Routes - Medic info found:", medicInfo.length);
      return medicInfo;
    } catch (error) {
      console.log("❌ Admin Routes - Medic info error:", error);
      // Return empty array instead of throwing error to prevent admin page from failing
      return [];
    }
  })
  
  // Create medic info
  .post("/admin/medic-info", async ({ body }) => {
    console.log("🔍 Admin Routes - POST /admin/medic-info called");
    try {
      const { nume, prenume, experienta, specialitate_id } = body;
      
      if (!nume || !prenume || experienta === undefined || !specialitate_id) {
        return { error: "Missing required fields: nume, prenume, experienta, specialitate_id" };
      }
      
      const newMedic = await prisma.medic_info.create({
        data: {
          nume,
          prenume,
          experienta: parseInt(experienta),
          specialitate_id: parseInt(specialitate_id)
        },
        include: {
          specialitati: true
        }
      });
      
      console.log("🔍 Admin Routes - Medic info created:", newMedic);
      return newMedic;
    } catch (error) {
      console.log("❌ Admin Routes - Create medic info error:", error);
      return { error: "Failed to create medic info" };
    }
  })
  
  // Update medic info
  .put("/admin/medic-info/:id", async ({ params, body }) => {
    console.log("🔍 Admin Routes - PUT /admin/medic-info/:id called");
    try {
      const { id } = params;
      const { nume, prenume, experienta, specialitate_id } = body;
      
      if (!nume || !prenume || experienta === undefined || !specialitate_id) {
        return { error: "Missing required fields: nume, prenume, experienta, specialitate_id" };
      }
      
      const updatedMedic = await prisma.medic_info.update({
        where: { id: parseInt(id) },
        data: {
          nume,
          prenume,
          experienta: parseInt(experienta),
          specialitate_id: parseInt(specialitate_id)
        },
        include: {
          specialitati: true
        }
      });
      
      console.log("🔍 Admin Routes - Medic info updated:", updatedMedic);
      return updatedMedic;
    } catch (error) {
      console.log("❌ Admin Routes - Update medic info error:", error);
      return { error: "Failed to update medic info" };
    }
  })
  
  // Delete medic info
  .delete("/admin/medic-info/:id", async ({ params }) => {
    console.log("🔍 Admin Routes - DELETE /admin/medic-info/:id called");
    try {
      const { id } = params;
      
      await prisma.medic_info.delete({
        where: { id: parseInt(id) }
      });
      
      console.log("🔍 Admin Routes - Medic info deleted:", id);
      return { success: true, message: "Medic info deleted successfully" };
    } catch (error) {
      console.log("❌ Admin Routes - Delete medic info error:", error);
      return { error: "Failed to delete medic info" };
    }
  })
  
  // Get specialitati
  .get("/admin/specialitati", async () => {
    console.log("🔍 Admin Routes - GET /admin/specialitati called");
    try {
      const specialitati = await prisma.specialitati.findMany({
        orderBy: {
          created_at: 'desc'
        }
      });
      
      console.log("🔍 Admin Routes - Specialitati found:", specialitati.length);
      return specialitati;
    } catch (error) {
      console.log("❌ Admin Routes - Specialitati error:", error);
      throw error;
    }
  })
  
  // Create new specialitate
  .post("/admin/specialitati", async ({ body }) => {
    console.log("🔍 Admin Routes - POST /admin/specialitati called");
    try {
      const { nume, descriere } = body as {
        nume: string;
        descriere: string;
      };
      
      if (!nume) {
        return { error: "Numele este obligatoriu" };
      }
      
      const specialitate = await prisma.specialitati.create({
        data: {
          nume: nume.trim(),
          descriere: descriere?.trim() || null
        }
      });
      
      console.log("✅ Admin Routes - Specialitate created successfully:", specialitate);
      return { message: "Specialitate creată cu succes", specialitate };
    } catch (error) {
      console.log("❌ Admin Routes - Create specialitate error:", error);
      return { error: "Failed to create specialitate", details: error.message };
    }
  })
  
  // Update specialitate
  .put("/admin/specialitati/:id", async ({ params, body }) => {
    console.log("🔍 Admin Routes - PUT /admin/specialitati/:id called");
    console.log("🔍 Params:", params);
    console.log("🔍 Body:", body);
    try {
      const { nume, descriere } = body as {
        nume: string;
        descriere: string;
      };
      
      if (!nume || nume.trim() === '') {
        return { error: "Numele este obligatoriu" };
      }
      
      const specialitate = await prisma.specialitati.update({
        where: { id: parseInt(params.id) },
        data: {
          nume: nume?.trim(),
          descriere: descriere?.trim() || null
        }
      });
      
      console.log("✅ Admin Routes - Specialitate updated successfully:", specialitate);
      return { message: "Specialitate actualizată cu succes", specialitate };
    } catch (error) {
      console.log("❌ Admin Routes - Update specialitate error:", error);
      return { error: "Failed to update specialitate", details: error.message };
    }
  })
  
  // Delete specialitate
  .delete("/admin/specialitati/:id", async ({ params }) => {
    console.log("🔍 Admin Routes - DELETE /admin/specialitati/:id called");
    console.log("🔍 Params:", params);
    try {
      const id = parseInt(params.id);
      if (isNaN(id)) {
        return { error: "Invalid ID" };
      }
      
      await prisma.specialitati.delete({
        where: { id }
      });
      
      console.log("✅ Admin Routes - Specialitate deleted successfully:", id);
      return { message: "Specialitate ștearsă cu succes", id };
    } catch (error) {
      console.log("❌ Admin Routes - Delete specialitate error:", error);
      return { error: "Failed to delete specialitate", details: error.message };
    }
  })
  
  // Get program lucru
  .get("/admin/program-lucru", async () => {
    console.log("🔍 Admin Routes - GET /admin/program-lucru called");
    try {
      const programLucru = await prisma.program_lucru.findMany({
        orderBy: {
          created_at: 'desc'
        }
      });
      
      console.log("🔍 Admin Routes - Program lucru found:", programLucru.length);
      return programLucru;
    } catch (error) {
      console.log("❌ Admin Routes - Program lucru error:", error);
      throw error;
    }
  })
  
  // Get specialitati
  .get("/admin/specialitati", async () => {
    console.log("🔍 Admin Routes - GET /admin/specialitati called");
    try {
      const specialitati = await prisma.specialitati.findMany({
        orderBy: {
          created_at: 'desc'
        }
      });
      
      console.log("🔍 Admin Routes - Specialitati found:", specialitati.length);
      return specialitati;
    } catch (error) {
      console.log("❌ Admin Routes - Specialitati error:", error);
      throw error;
    }
  })
  
  // Create new specialitate
  .post("/admin/specialitati", async ({ body }) => {
    console.log("🔍 Admin Routes - POST /admin/specialitati called");
    try {
      const { nume, descriere } = body as {
        nume: string;
        descriere: string;
      };
      
      if (!nume) {
        return { error: "Numele este obligatoriu" };
      }
      
      const specialitate = await prisma.specialitati.create({
        data: {
          nume: nume.trim(),
          descriere: descriere?.trim() || null
        }
      });
      
      console.log("✅ Admin Routes - Specialitate created successfully:", specialitate);
      return { message: "Specialitate creată cu succes", specialitate };
    } catch (error) {
      console.log("❌ Admin Routes - Create specialitate error:", error);
      throw error;
    }
  })
  
  // Update specialitate
  .put("/admin/specialitati/:id", async ({ params, body }) => {
    console.log("🔍 Admin Routes - PUT /admin/specialitati/:id called");
    console.log("🔍 Params:", params);
    console.log("🔍 Body:", body);
    try {
      const { nume, descriere } = body as {
        nume: string;
        descriere: string;
      };
      
      if (!nume || nume.trim() === '') {
        return { error: "Numele este obligatoriu" };
      }
      
      const specialitate = await prisma.specialitati.update({
        where: { id: parseInt(params.id) },
        data: {
          nume: nume?.trim(),
          descriere: descriere?.trim() || null
        }
      });
      
      console.log("✅ Admin Routes - Specialitate updated successfully:", specialitate);
      return { message: "Specialitate actualizată cu succes", specialitate };
    } catch (error) {
      console.log("❌ Admin Routes - Update specialitate error:", error);
      return { error: "Failed to update specialitate", details: error.message };
    }
  })
  
  // Delete specialitate
  .delete("/admin/specialitati/:id", async ({ params }) => {
    console.log("🔍 Admin Routes - DELETE /admin/specialitati/:id called");
    console.log("🔍 Params:", params);
    try {
      const id = parseInt(params.id);
      if (isNaN(id)) {
        return { error: "Invalid ID" };
      }
      
      await prisma.specialitati.delete({
        where: { id }
      });
      
      console.log("✅ Admin Routes - Specialitate deleted successfully:", id);
      return { message: "Specialitate ștearsă cu succes", id };
    } catch (error) {
      console.log("❌ Admin Routes - Delete specialitate error:", error);
      return { error: "Failed to delete specialitate", details: error.message };
    }
  })
  
  // Get programari
  .get("/admin/programari", async () => {
    console.log("🔍 Admin Routes - GET /admin/programari called");
    try {
      const programari = await prisma.programari.findMany({
        orderBy: {
          created_at: 'desc'
        }
      });
      
      console.log("🔍 Admin Routes - Programari found:", programari.length);
      return programari;
    } catch (error) {
      console.log("❌ Admin Routes - Programari error:", error);
      throw error;
    }
  })
  
  // Confirm appointment
  .put("/admin/programari/:id/confirm", async ({ params }) => {
    console.log("🔍 Admin Routes - PUT /admin/programari/:id/confirm called");
    try {
      const programare = await prisma.programari.update({
        where: { id: parseInt(params.id) },
        data: { status: 'confirmat' }
      });
      
      console.log("🔍 Admin Routes - Appointment confirmed:", programare.id);
      return { message: "Appointment confirmed successfully", programare };
    } catch (error) {
      console.log("❌ Admin Routes - Confirm appointment error:", error);
      throw error;
    }
  });
