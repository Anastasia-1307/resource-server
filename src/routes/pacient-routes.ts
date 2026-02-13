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
    
    // Format the programari data to match frontend expectations
    const formattedProgramari = programari.map(programare => {
      // Parse serviciu format: "Nume Prenume - Specialitate - Ora"
      const serviciuParts = programare.serviciu.split(' - ');
      const medicName = serviciuParts[0] || '';
      const specialitate = serviciuParts[1] || '';
      const ora = serviciuParts[2] || '';
      
      // Extract date and time from data_programare
      const dateTime = new Date(programare.data_programare);
      const date = dateTime.toISOString().split('T')[0];
      
      return {
        id: programare.id.toString(),
        medic_id: '', // We don't store this separately anymore
        data_programare: date,
        ora_programare: ora,
        status: programare.status || 'programat',
        serviciu: programare.serviciu,
        medic_name: medicName,
        specialitate: specialitate
      };
    });
    
    const total = await prisma.programari.count({ where });
    
    return { programari: formattedProgramari, total, hasMore: Number(offset) + Number(limit) < total };
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
    const { medic_id, data_programare, ora_programare, detalii } = body as any;
    
    // Get medic info to create a proper serviciu description
    const medic = await prisma.medic_info.findUnique({
      where: { id: parseInt(medic_id) },
      include: { specialitati: true }
    });
    
    if (!medic) {
      throw new Error("Medic not found");
    }
    
    // Create serviciu description from medic info
    const serviciu = `${medic.nume} ${medic.prenume} - ${medic.specialitati?.nume || 'General'} - ${ora_programare}`;
    
    // Combine date and time for proper DateTime
    const programareDateTime = new Date(`${data_programare}T${ora_programare}`);
    
    const programare = await prisma.programari.create({
      data: {
        user_id: user.id,
        medic_id: parseInt(medic_id),
        serviciu,
        status: 'programat',
        data_programare: programareDateTime
      }
    });
    
    return { message: "Programare created successfully", programare };
  })
  
  // Update programare status
  .patch("/pacient/programari/:id", async ({ params, body, user }) => {
    const { status } = body as { status: string };
    const programareId = parseInt(params.id);
    
    if (!status || !['programat', 'confirmat', 'anulat'].includes(status)) {
      throw new Error('Invalid status. Must be: programat, confirmat, or anulat');
    }
    
    const programare = await prisma.programari.updateMany({
      where: {
        id: programareId,
        user_id: user.id
      },
      data: {
        status,
        updated_at: new Date()
      }
    });
    
    if (programare.count === 0) {
      throw new Error("Programare not found or unauthorized");
    }
    
    return { message: "Status updated successfully" };
  })
  
  // Cancel programare
  .delete("/pacient/programari/:id", async ({ params, user }) => {
    const programare = await prisma.programari.deleteMany({
      where: {
        id: parseInt(params.id),
        user_id: user.id
      }
    });
    
    if (programare.count === 0) {
      throw new Error("Programare not found");
    }
    
    return { message: "Programare deleted successfully" };
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
