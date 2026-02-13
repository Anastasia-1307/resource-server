// @ts-nocheck
import { Elysia } from "elysia";
import { authMiddleware } from "../middleware/auth-middleware";
import { requireAdmin } from "../middleware/role-middleware";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const adminRoutes = new Elysia({ prefix: "/api" })
  .onRequest(({ request, set }) => {
    console.log("🔥 ADMIN ROUTES onRequest - Request received:", request.method, request.url);
    
    // Only process requests that are actually for admin endpoints
    if (!request.url.includes('/admin/')) {
      console.log("🔥 ADMIN ROUTES - Skipping non-admin request:", request.url);
      // Don't return anything, let other routes handle it
      return;
    }
    
    // For admin requests, don't return anything to let the flow continue
    console.log("🔥 ADMIN ROUTES - Processing admin request:", request.url);
  })
  .derive(authMiddleware)
  .derive(({ user }) => ({ user }))
  .onBeforeHandle(({ user, set, request }) => {
    console.log(`🔥 ADMIN ROUTES - Role middleware check for: ${request.url}`);
    console.log(`🔥 ADMIN ROUTES - User from auth middleware:`, user);
    
    if (!user || !user.role) {
      console.log("❌ Role Middleware - User or user.role undefined");
      set.status = 401;
      throw new Error("Unauthorized - User not authenticated");
    }
    
    if (user.role !== 'admin') {
      console.log(`❌ Role Middleware - User role ${user.role} is not admin`);
      set.status = 403;
      throw new Error(`Forbidden - Required role: admin`);
    }
    
    console.log(`✅ Role Middleware - Admin access granted for ${user.email}`);
  })
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

      // Check if user already exists in oauth_users table
      let user = await prisma.oauth_users.findUnique({
        where: { id: payload.sub }
      });

      if (user) {
        console.log("🔍 Public OAuth Sync - OAuth user already exists:", user.email);
        return { message: "OAuth user already exists", user: { id: user.id, email: user.email, role: user.role } };
      }

      // Create new OAuth user in oauth_users table
      console.log("🔍 Public OAuth Sync - Creating new OAuth user...");
      user = await prisma.oauth_users.create({
        data: {
          id: payload.sub,
          email: payload.email as string,
          username: (payload.name as string) || (payload.email as string),
          password_hash: "oauth_placeholder", // OAuth users don't have passwords
          role: (payload.role as string) || 'pacient',
        }
      });

      console.log("✅ Public OAuth Sync - OAuth user created successfully:", user.email);
      return { message: "OAuth user synced successfully", user: { id: user.id, email: user.email, role: user.role } };
      
    } catch (error) {
      console.log("❌ Public OAuth Sync - Error:", error);
      set.status = 401;
      throw new Error("Invalid token or sync failed");
    }
  })
  
  // Migrate existing OAuth users from users table to oauth_users table
  .post("/admin/migrate-oauth-users", async () => {
    console.log("🔍 Admin Routes - POST /admin/migrate-oauth-users called");
    try {
      // Find all OAuth users in the users table
      const oauthUsersInUsersTable = await prisma.users.findMany({
        where: {
          password_hash: 'oauth_placeholder'
        }
      });
      
      console.log("🔍 Admin Routes - Found OAuth users in users table:", oauthUsersInUsersTable.length);
      
      let migratedCount = 0;
      
      for (const user of oauthUsersInUsersTable) {
        // Check if user already exists in oauth_users table
        const existingOAuthUser = await prisma.oauth_users.findUnique({
          where: { id: user.id }
        });
        
        if (!existingOAuthUser) {
          // Migrate user to oauth_users table
          await prisma.oauth_users.create({
            data: {
              id: user.id,
              email: user.email,
              username: user.username,
              password_hash: user.password_hash,
              role: user.role,
              created_at: user.created_at,
              updated_at: user.updated_at
            }
          });
          
          // Optionally delete from users table or keep for reference
          // await prisma.users.delete({ where: { id: user.id } });
          
          migratedCount++;
        }
      }
      
      console.log("✅ Admin Routes - Migrated", migratedCount, "OAuth users");
      return { 
        message: `Successfully migrated ${migratedCount} OAuth users`, 
        migratedCount,
        totalFound: oauthUsersInUsersTable.length 
      };
    } catch (error) {
      console.log("❌ Admin Routes - Migration error:", error);
      return { error: "Failed to migrate OAuth users", details: error instanceof Error ? error.message : String(error) };
    }
  })
  
  .get("/admin", ({ user }) => ({
    message: "Welcome admin",
    user: {
      id: user.id,
      email: user.email,
      username: user.name || user.email,
      role: user.role,
    },
    timestamp: new Date().toISOString(),
  }))
  
  // Get all classic users (non-OAuth)
  .get("/admin/users", async () => {
    console.log("🔍 Admin Routes - GET /admin/users called");
    try {
      const users = await prisma.users.findMany({
        where: {
          password_hash: {
            not: 'oauth_placeholder'
          }
        },
        orderBy: {
          created_at: 'desc'
        }
      });
      
      console.log("🔍 Admin Routes - Classic users found:", users.length);
      console.log("🔍 Admin Routes - Sample users:", users.slice(0, 2));
      
      return { users, total: users.length };
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
        prisma.programari.count(),
        prisma.user_logs.count()
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
  
    
  // Get OAuth users merged (from oauth_users table)
  .get("/admin/oauth-users-merged", async () => {
    console.log("🔍 Admin Routes - GET /admin/oauth-users-merged called");
    try {
      console.log("🔍 Admin Routes - About to query oauth_users table");
      const oauthUsers = await prisma.oauth_users.findMany({
        orderBy: {
          created_at: 'desc'
        }
      });
      
      console.log("🔍 Admin Routes - OAuth users found:", oauthUsers.length);
      console.log("🔍 Admin Routes - OAuth users data:", oauthUsers);
      console.log("🔍 Admin Routes - About to return response:", { users: oauthUsers });
      
      return { users: oauthUsers };
    } catch (error) {
      console.log("❌ Admin Routes - OAuth users merged error:", error);
      console.log("❌ Admin Routes - Error details:", error instanceof Error ? error.message : String(error));
      return { users: [] };
    }
  })
  
  // Update OAuth user
  .put("/admin/oauth-users-merged/:id", async ({ params, body }) => {
    console.log("🔍 Admin Routes - PUT /admin/oauth-users-merged/:id called");
    try {
      const { id } = params;
      const { email, username, role } = body as {
        email: string;
        username: string;
        role: string;
      };
      
      if (!email || !username || !role) {
        return { error: "Missing required fields: email, username, role" };
      }
      
      const updatedUser = await prisma.oauth_users.update({
        where: { id },
        data: {
          email,
          username,
          role
        }
      });
      
      console.log("✅ Admin Routes - OAuth user updated:", updatedUser.id);
      return { message: "OAuth user updated successfully", user: updatedUser };
    } catch (error) {
      console.log("❌ Admin Routes - Update OAuth user error:", error);
      return { error: "Failed to update OAuth user", details: error instanceof Error ? error.message : String(error) };
    }
  })
  
  // Delete OAuth user
  .delete("/admin/oauth-users-merged/:id", async ({ params }) => {
    console.log("🔍 Admin Routes - DELETE /admin/oauth-users-merged/:id called");
    try {
      const { id } = params;
      
      // First check if user exists
      const user = await prisma.oauth_users.findUnique({
        where: { id }
      });
      
      if (!user) {
        return { error: "OAuth user not found" };
      }
      
      // Delete the OAuth user
      await prisma.oauth_users.delete({
        where: { id }
      });
      
      console.log("✅ Admin Routes - OAuth user deleted:", id);
      return { success: true, message: "OAuth user deleted successfully" };
    } catch (error) {
      console.log("❌ Admin Routes - Delete OAuth user error:", error);
      return { error: "Failed to delete OAuth user", details: error instanceof Error ? error.message : String(error) };
    }
  })
  
  // Create OAuth user
  .post("/admin/oauth-users-merged", async ({ body }) => {
    console.log("🔍 Admin Routes - POST /admin/oauth-users-merged called");
    try {
      const { email, username, password, role } = body as {
        email: string;
        username: string;
        password?: string;
        role: string;
      };
      
      if (!email || !username || !role) {
        return { error: "Missing required fields: email, username, role" };
      }
      
      const newUser = await prisma.oauth_users.create({
        data: {
          email,
          username,
          password_hash: password || "oauth_placeholder",
          role
        }
      });
      
      console.log("✅ Admin Routes - OAuth user created:", newUser.id);
      return { message: "OAuth user created successfully", user: newUser };
    } catch (error) {
      console.log("❌ Admin Routes - Create OAuth user error:", error);
      return { error: "Failed to create OAuth user", details: error instanceof Error ? error.message : String(error) };
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
      
      // Dacă nu există medici, adăugăm unul default pentru test
      if (medicInfo.length === 0) {
        console.log("🔍 No medici found, adding default medic for testing");
        const defaultMedic = await prisma.medic_info.create({
          data: {
            nume: "Test",
            prenume: "Medic",
            experienta: 5,
            specialitate_id: 1
          }
        });
        console.log("🔍 Default medic created:", defaultMedic);
        medicInfo.push(defaultMedic);
      }
      
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
      const { nume, prenume, experienta, specialitate_id } = body as {
        nume: string;
        prenume: string;
        experienta: number;
        specialitate_id: number;
      };
      
      if (!nume || !prenume || experienta === undefined || !specialitate_id) {
        return { error: "Missing required fields: nume, prenume, experienta, specialitate_id" };
      }
      
      const newMedic = await prisma.medic_info.create({
        data: {
          nume,
          prenume,
          experienta,
          specialitate_id
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
      const { nume, prenume, experienta, specialitate_id } = body as {
        nume: string;
        prenume: string;
        experienta: number;
        specialitate_id: number;
      };
      
      if (!nume || !prenume || experienta === undefined || !specialitate_id) {
        return { error: "Missing required fields: nume, prenume, experienta, specialitate_id" };
      }
      
      const updatedMedic = await prisma.medic_info.update({
        where: { id: parseInt(id) },
        data: {
          nume,
          prenume,
          experienta,
          specialitate_id
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
    console.log("🔍🔍🔍 DELETE ROUTE CALLED!!! /admin/medic-info/:id called");
    console.log("🔍 Admin Routes - DELETE /admin/medic-info/:id called");
    try {
      const { id } = params;
      const medicId = parseInt(id);
      
      // First check if medic exists
      const medic = await prisma.medic_info.findUnique({
        where: { id: medicId },
        include: {
          program_lucru: true
        }
      });
      
      if (!medic) {
        return { error: "Medic info not found" };
      }
      
      // Delete related work schedules first
      if (medic.program_lucru.length > 0) {
        console.log("🔍 Admin Routes - Deleting work schedules for medic:", medicId);
        await prisma.program_lucru.deleteMany({
          where: { medic_info_id: medicId }
        });
      }
      
      // Now delete the medic info
      await prisma.medic_info.delete({
        where: { id: medicId }
      });
      
      console.log("🔍 Admin Routes - Medic info deleted:", id);
      return { success: true, message: "Medic info deleted successfully" };
    } catch (error) {
      console.log("❌ Admin Routes - Delete medic info error:", error);
      return { error: "Failed to delete medic info", details: error instanceof Error ? error.message : String(error) };
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
  
  // Get programari lucru
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
      // Return empty array instead of throwing error to prevent admin page from failing
      return [];
    }
  })
  
  // Create program lucru
  .post("/admin/program-lucru", async ({ body }) => {
    console.log("🔍 Admin Routes - POST /admin/program-lucru called");
    try {
      const { nume_medic, prenume_medic, ora_inceput, ora_sfarsit, activ, medic_info_id } = body;
      
      if (!nume_medic || !prenume_medic || !ora_inceput || !ora_sfarsit) {
        return { error: "Missing required fields: nume_medic, prenume_medic, ora_inceput, ora_sfarsit" };
      }
      
      // Log pentru a vedea ce câmpuri are modelul
      console.log("🔍 Available fields in program_lucru model:", Object.keys(prisma.program_lucru.fields || {}));
      
      // Testăm cu doar medic_nume pentru a izola problema
      const programLucru = await prisma.program_lucru.create({
        data: {
          medic_info_id: medic_info_id || 1, // Default la 1 dacă nu e specificat
          medic_nume: `${nume_medic} ${prenume_medic}`, // Combinăm numele temporar
          // prenume_medic: prenume_medic, // Comentăm temporar
          ora_inceput: new Date(ora_inceput),
          ora_sfarsit: new Date(ora_sfarsit),
          activ: activ !== undefined ? activ : true,
          created_at: new Date(),
          updated_at: new Date()
        }
      });
      
      console.log("✅ Admin Routes - Program lucru created:", programLucru.id);
      return { message: "Program lucru created successfully", programLucru };
    } catch (error) {
      console.log("❌ Admin Routes - Create program lucru error:", error);
      return { error: "Failed to create program lucru", details: error instanceof Error ? error.message : String(error) };
    }
  })
  
  // Update program lucru
  .put("/admin/program-lucru/:id", async ({ params, body }) => {
    console.log("🔍 Admin Routes - PUT /admin/program-lucru/:id called");
    try {
      const { id } = params;
      const { nume_medic, prenume_medic, ora_inceput, ora_sfarsit, activ, medic_info_id } = body;
      
      if (!nume_medic || !prenume_medic || !ora_inceput || !ora_sfarsit) {
        return { error: "Missing required fields: nume_medic, prenume_medic, ora_inceput, ora_sfarsit" };
      }
      
      // Log pentru a vedea ce câmpuri are modelul
      console.log("🔍 Available fields in program_lucru model:", Object.keys(prisma.program_lucru.fields || {}));
      
      const programLucru = await prisma.program_lucru.update({
        where: { id: parseInt(id) },
        data: {
          medic_info_id: medic_info_id || 1, // Default la 1 dacă nu e specificat
          medic_nume: `${nume_medic} ${prenume_medic}`, // Combinăm numele temporar
          // prenume_medic: prenume_medic, // Comentăm temporar
          ora_inceput: new Date(ora_inceput),
          ora_sfarsit: new Date(ora_sfarsit),
          activ: activ !== undefined ? activ : true,
          updated_at: new Date()
        }
      });
      
      console.log("✅ Admin Routes - Program lucru updated:", programLucru.id);
      return { message: "Program lucru updated successfully", programLucru };
    } catch (error) {
      console.log("❌ Admin Routes - Update program lucru error:", error);
      return { error: "Failed to update program lucru", details: error instanceof Error ? error.message : String(error) };
    }
  })
  
  // Delete program lucru
  .delete("/admin/program-lucru/:id", async ({ params }) => {
    console.log("🔍 Admin Routes - DELETE /admin/program-lucru/:id called");
    try {
      const { id } = params;
      
      const programLucru = await prisma.program_lucru.delete({
        where: { id: parseInt(id) }
      });
      
      console.log("✅ Admin Routes - Program lucru deleted:", id);
      return { message: "Program lucru deleted successfully", id: parseInt(id) };
    } catch (error) {
      console.log("❌ Admin Routes - Delete program lucru error:", error);
      return { error: "Failed to delete program lucru", details: error instanceof Error ? error.message : String(error) };
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
  })

  // Get password reset tokens
  .get("/admin/password-reset-tokens", async () => {
    console.log("🔍 Admin Routes - GET /admin/password-reset-tokens called");
    try {
      const tokens = await prisma.password_reset_tokens.findMany({
        orderBy: {
          created_at: 'desc'
        },
        take: 100 // Limit to last 100 tokens
      });
      
      console.log("🔍 Admin Routes - Password reset tokens found:", tokens.length);
      return tokens;
    } catch (error) {
      console.log("❌ Admin Routes - Password reset tokens error:", error);
      // Return empty array if table doesn't exist or has no data
      return [];
    }
  });
