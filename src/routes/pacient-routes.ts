// @ts-nocheck
import { Elysia } from "elysia";
import { authMiddleware } from "../middleware/auth-middleware";
import { requirePacient } from "../middleware/role-middleware";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const pacientRoutes = new Elysia({ prefix: "/api" })
  .derive(authMiddleware)
  .derive(requirePacient)
  .get("/pacient", ({ user }) => {
    return {
      message: "Welcome pacient",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      timestamp: new Date().toISOString(),
    };
  })
  
  // Get patient profile
  .get("/pacient/profile", async ({ user }) => {
    return {
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      }
    };
  })
  
  // Update patient profile
  .put("/pacient/profile", async ({ user, body }) => {
    const { email, username } = body as any;
    
    const updatedUser = await prisma.users.update({
      where: { id: user.id },
      data: {
        email,
        username,
        updated_at: new Date()
      }
    });
    
    return { message: "Profile updated successfully", user: updatedUser };
  })
  
  // Get patient's programari
  .get("/pacient/programari", async ({ user, query }) => {
    const { status, limit = 10, offset = 0 } = query as { 
      status?: string, 
      limit?: number, 
      offset?: number 
    };
    
    const where: any = { user_id: user.id };
    
    if (status) {
      where.status = status;
    }
    
    const programari = await prisma.programari.findMany({
      where,
      orderBy: {
        data_programare: 'desc'
      },
      take: Number(limit),
      skip: Number(offset)
    });
    
    const total = await prisma.programari.count({ where });
    
    return { programari, total, hasMore: Number(offset) + Number(limit) < total };
  })
  
  // Get programare details
  .get("/pacient/programari/:id", async ({ params, user }) => {
    const programare = await prisma.programari.findFirst({
      where: {
        id: parseInt(params.id),
        user_id: user.id
      }
    });
    
    if (!programare) {
      throw new Error("Programare not found");
    }
    
    return { programare };
  })
  
  // Create new programare
  .post("/pacient/programari", async ({ user, body }) => {
    const { serviciu, data_programare, observatii } = body as any;
    
    const programare = await prisma.programari.create({
      data: {
        user_id: user.id,
        serviciu,
        data_programare: new Date(data_programare),
        observatii,
        status: 'pending'
      }
    });
    
    return { message: "Programare created successfully", programare };
  })
  
  // Cancel programare
  .put("/pacient/programari/:id/cancel", async ({ params, user }) => {
    const programare = await prisma.programari.updateMany({
      where: {
        id: parseInt(params.id),
        user_id: user.id,
        status: 'pending'
      },
      data: {
        status: 'cancelled',
        updated_at: new Date()
      }
    });
    
    if (programare.count === 0) {
      throw new Error("Programare not found or cannot be cancelled");
    }
    
    return { message: "Programare cancelled successfully" };
  })
  
  // Get all medici
  .get("/pacient/medici", async () => {
    const medici = await prisma.medic_info.findMany({
      include: {
        specialitati: true
      }
    });
    
    return medici.map(medic => ({
      id: medic.id.toString(),
      user_id: medic.user_id,
      specialitate: medic.specialitati?.nume || 'Nespecificat',
      experienta: medic.experienta,
      nume: medic.nume,
      prenume: medic.prenume,
      telefon: medic.telefon || 'Nu specificat',
      specialitate_id: medic.specialitate_id,
      created_at: medic.created_at?.toISOString(),
      updated_at: medic.updated_at?.toISOString()
    }));
  })
  
  // Get all specialitati
  .get("/pacient/specialitati", async () => {
    const specialitati = await prisma.specialitati.findMany();
    return specialitati;
  })

  // Get user statistics
  .get("/pacient/stats", async ({ user }) => {
    const [totalProgramari, pendingProgramari, confirmedProgramari] = await Promise.all([
      prisma.programari.count({
        where: { user_id: user.id }
      }),
      prisma.programari.count({
        where: {
          user_id: user.id,
          status: 'pending'
        }
      }),
      prisma.programari.count({
        where: {
          user_id: user.id,
          status: 'confirmed'
        }
      })
    ]);
    
    return {
      stats: {
        totalProgramari,
        pendingProgramari,
        confirmedProgramari
      }
    };
  });
