// @ts-nocheck
import { Elysia } from "elysia";
import { authMiddleware } from "../middleware/auth-middleware";
import { requireMedic } from "../middleware/role-middleware";
import { verifyToken } from "../lib/jwt";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

// Combined middleware for authentication and role checking
const medicAuthMiddleware = async ({ request, set }: any) => {
  console.log("🔍 Combined Medic Auth Middleware - Request received:", request.method, request.url);
  
  if (!request || !request.headers) {
    console.log("❌ Combined Medic Auth Middleware - Request or headers undefined");
    set.status = 400;
    throw new Error("Invalid request - missing headers");
  }
  
  const auth = request.headers.get("authorization");
  console.log("🔍 Combined Medic Auth Middleware - Authorization header:", auth?.substring(0, 20) + "...");

  if (!auth?.startsWith("Bearer ")) {
    console.log("❌ Combined Medic Auth Middleware - Missing or invalid token format");
    set.status = 401;
    throw new Error("Not authorized - Missing or invalid token format");
  }

  const token = auth.slice(7);
  console.log("🔍 Combined Medic Auth Middleware - Token extracted:", token.substring(0, 20) + "...");
  console.log("🔍 Combined Medic Auth Middleware - Token length:", token.length);

  try {
    // Verify JWT token
    console.log("🔍 Combined Medic Auth Middleware - Verifying token...");
    console.log("🔍 Combined Medic Auth Middleware - Token:", token.substring(0, 50) + "...");
    console.log("🔍 Combined Medic Auth Middleware - Token length:", token.length);
    
    const payload = await verifyToken(token);
    
    console.log("🔍 Combined Medic Auth Middleware - JWT Verification SUCCESS:", payload);
    
    if (!payload.sub) {
      console.log("❌ Combined Medic Auth Middleware - Invalid token subject");
      set.status = 401;
      throw new Error("Not authorized - Invalid token subject");
    }

    if (payload.role !== "medic") {
      console.log("❌ Combined Medic Auth Middleware - Invalid role:", payload.role);
      set.status = 403;
      throw new Error("Forbidden - Required role: medic");
    }

    console.log("Combined Medic Auth Middleware - Token verified successfully:", payload);

    // Skip database lookup - use JWT payload directly
    // The token is already verified by auth server, so we can trust the payload
    const user = {
      id: payload.sub,
      email: payload.email,
      name: payload.name,
      role: payload.role
    };

    console.log("Combined Medic Auth Middleware - User from JWT:", user);
    
    // Return user object to be added to context by .derive()
    return { user };
    
  } catch (error) {
    console.log("Combined Medic Auth Middleware - Error:", error);
    set.status = 401;
    throw new Error("Not authorized - Invalid token");
  }
};

export const medicRoutes = new Elysia({ prefix: "/api" })
  .onRequest(({ request, set }) => {
    console.log("🔥 MEDIC ROUTES onRequest - Request received:", request.method, request.url);
  })
  .derive(medicAuthMiddleware)
  // Get doctor's appointments - MUST come before /medic route
  .get("/medic/appointments", async ({ user, query, request }) => {
    console.log('🔥🔥🔥 GET /medic/appointments - ROUTE HIT!');
    console.log('🔍 GET /medic/appointments - user:', user);
    console.log('🔍 GET /medic/appointments - query:', query);
    console.log('🔍 GET /medic/appointments - request.url:', request.url);
    console.log('🔍 GET /medic/appointments - query:', query);
    
    // Filter by current medic's user_id
    const where: any = {
      user_id: user.id // Only get appointments for current medic
    };
    
    if (date) {
      const startOfDay = new Date(date);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      
      where.data_programare = {
        gte: startOfDay,
        lte: endOfDay
      };
    }
    
    const programari = await prisma.programari.findMany({
      where,
      include: {
        users: {
          select: {
            username: true,
            email: true
          }
        }
      },
      orderBy: {
        data_programare: 'asc'
      }
    });
    
    console.log('🔍 GET /medic/appointments - programari found:', programari.length);
    
    // Transform appointments to match frontend interface
    const transformedAppointments = programari.map(programare => ({
      id: programare.id,
      data_programare: programare.data_programare.toISOString().split('T')[0],
      ora_programare: programare.data_programare.toTimeString().slice(0, 5),
      status: 'programat', // All appointments start as 'programat'
      detalii: programare.serviciu || ''
    }));
    
    console.log('🔍 GET /medic/appointments - transformed:', transformedAppointments);
    
    return transformedAppointments; // Return array directly, not wrapped in object
  })
  
  // Create new appointment
  .post("/medic/appointments", async ({ body, user, request }) => {
    console.log('🔍 POST /medic/appointments - REQUEST STARTED');
    console.log('🔍 POST /medic/appointments - headers:', Object.fromEntries(request.headers.entries()));
    
    const { date, time, notes, pacient_nume } = body as {
      date: string;
      time: string;
      notes?: string;
      pacient_nume?: string;
    };
    
    console.log('🔍 POST /medic/appointments - body:', body);
    console.log('🔍 POST /medic/appointments - user:', user);
    
    if (!user || !user.id) {
      console.error('🔍 POST /medic/appointments - ERROR: No user or user.id');
      throw new Error('Unauthorized: No user context');
    }
    
    // Combine date and time into datetime
    const dateTime = new Date(`${date}T${time}:00`);
    console.log('🔍 POST /medic/appointments - dateTime:', dateTime);
    console.log('🔍 POST /medic/appointments - dateTime isValid:', !isNaN(dateTime.getTime()));
    
    try {
      // Create programare using medic's user_id for now
      // TODO: Implement proper patient selection system
      console.log('🔍 POST /medic/appointments - Creating programare with data:', {
        user_id: user.id,
        serviciu: `${pacient_nume ? `Pacient: ${pacient_nume}` : 'Programare'}${notes ? ` - ${notes}` : ''}`,
        data_programare: dateTime
      });
      
      const programare = await prisma.programari.create({
        data: {
          user_id: user.id, // Using medic's ID temporarily
          serviciu: `${pacient_nume ? `Pacient: ${pacient_nume}` : 'Programare'}${notes ? ` - ${notes}` : ''}`,
          data_programare: dateTime
        }
      });
      
      console.log('🔍 POST /medic/appointments - programare created:', programare);
      
      // Transform to match frontend interface
      const transformedAppointment = {
        id: programare.id,
        data_programare: programare.data_programare.toISOString().split('T')[0],
        ora_programare: programare.data_programare.toTimeString().slice(0, 5),
        status: 'programat',
        detalii: programare.serviciu || ''
      };
      
      console.log('🔍 POST /medic/appointments - transformedAppointment:', transformedAppointment);
      
      return transformedAppointment;
    } catch (error) {
      console.error('🔍 POST /medic/appointments - ERROR:', error);
      console.error('🔍 POST /medic/appointments - ERROR stack:', error.stack);
      throw error;
    }
  })
  
  // General medic info route - MUST come after specific routes
  .get("/medic", ({ user }) => {
    return {
      message: "Welcome medic",
      user: {
        id: user.id,
        email: user.email,
        username: user.username,
        role: user.role,
      },
      timestamp: new Date().toISOString(),
    };
  })
  
  // Get doctor profile
  .get("/medic/profile", async ({ user }) => {
    const doctor = await prisma.doctor.findUnique({
      where: { user_id: user.id },
      include: {
        user: true
      }
    });
    
    if (!doctor) {
      throw new Error("Doctor profile not found");
    }
    
    return { doctor };
  })
  
  // Get doctor's patients
  .get("/medic/patients", async ({ user, query }) => {
    const { search } = query as { search?: string };
    
    const where: any = {};
    
    if (search) {
      where.OR = [
        {
          user: {
            OR: [
              { username: { contains: search, mode: 'insensitive' } },
              { email: { contains: search, mode: 'insensitive' } }
            ]
          }
        },
        { cnp: { contains: search } },
        { phone: { contains: search } }
      ];
    }
    
    const patients = await prisma.patient.findMany({
      where,
      include: {
        user: true,
        appointments: {
          where: { doctor_id: user.id },
          orderBy: { date_time: 'desc' },
          take: 1
        },
        medicalRecords: {
          where: { doctor_id: user.id },
          orderBy: { created_at: 'desc' },
          take: 1
        }
      },
      orderBy: {
        user: {
          username: 'asc'
        }
      }
    });
    
    // Transform patients to match frontend interface
    const transformedPatients = patients.map(patient => ({
      id: patient.id,
      name: patient.user.username,
      email: patient.user.email,
      phone: patient.phone || undefined
    }));
    
    return { patients: transformedPatients, total: transformedPatients.length };
  })
  
  // Get patient details with medical history
  .get("/medic/patients/:id", async ({ params, user }) => {
    const patient = await prisma.patient.findUnique({
      where: { id: params.id },
      include: {
        user: true,
        appointments: {
          where: { doctor_id: user.id },
          include: {
            medicalRecord: true
          },
          orderBy: {
            date_time: 'desc'
          }
        },
        medicalRecords: {
          where: { doctor_id: user.id },
          orderBy: {
            created_at: 'desc'
          }
        }
      }
    });
    
    if (!patient) {
      throw new Error("Patient not found");
    }
    
    return { patient };
  })
  
  // Create medical record
  .post("/medic/medical-records", async ({ body, user }) => {
    const { 
      patient_id, 
      appointment_id, 
      diagnosis, 
      symptoms, 
      treatment, 
      prescription, 
      recommendations, 
      follow_up_date 
    } = body as any;
    
    const medicalRecord = await prisma.medicalRecord.create({
      data: {
        patient_id,
        doctor_id: user.id,
        appointment_id,
        diagnosis,
        symptoms,
        treatment,
        prescription,
        recommendations,
        follow_up_date: follow_up_date ? new Date(follow_up_date) : null
      },
      include: {
        patient: {
          include: {
            user: true
          }
        }
      }
    });
    
    // Update appointment status to finalized
    if (appointment_id) {
      await prisma.appointment.update({
        where: { id: appointment_id },
        data: { 
          status: 'finalizata',
          updated_at: new Date()
        }
      });
    }
    
    return { message: "Medical record created successfully", medicalRecord };
  })
  
  // Update medical record
  .put("/medic/medical-records/:id", async ({ params, body, user }) => {
    const { 
      diagnosis, 
      symptoms, 
      treatment, 
      prescription, 
      recommendations, 
      follow_up_date 
    } = body as any;
    
    console.log('🔍 PUT params.id:', params.id, typeof params.id);
    
    const medicalRecord = await prisma.medicalRecord.updateMany({
      where: {
        id: parseInt(params.id),
        doctor_id: user.id
      },
      data: {
        diagnosis,
        symptoms,
        treatment,
        prescription,
        recommendations,
        follow_up_date: follow_up_date ? new Date(follow_up_date) : null,
        updated_at: new Date()
      }
    });
    
    if (medicalRecord.count === 0) {
      throw new Error("Medical record not found or unauthorized");
    }
    
    return { message: "Medical record updated successfully" };
  })
  
  // Get medical record
  .get("/medic/medical-records/:id", async ({ params, user }) => {
    console.log('🔍 GET params.id:', params.id, typeof params.id);
    
    const medicalRecord = await prisma.medicalRecord.findFirst({
      where: {
        id: parseInt(params.id),
        doctor_id: user.id
      },
      include: {
        patient: {
          include: {
            user: true
          }
        },
        appointment: true
      }
    });
    
    if (!medicalRecord) {
      throw new Error("Medical record not found");
    }
    
    return { medicalRecord };
  })
  
  // Get today's schedule
  .get("/medic/schedule", async ({ user }) => {
    const today = new Date();
    const startOfDay = new Date(today);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(today);
    endOfDay.setHours(23, 59, 59, 999);
    
    const appointments = await prisma.appointment.findMany({
      where: {
        doctor_id: user.id,
        date_time: {
          gte: startOfDay,
          lte: endOfDay
        }
      },
      include: {
        patient: {
          include: {
            user: true
          }
        }
      },
      orderBy: {
        date_time: 'asc'
      }
    });
    
    return { 
      appointments,
      date: today.toISOString().split('T')[0],
      total: appointments.length
    };
  })
  
  // Get statistics
  .get("/medic/stats", async ({ user }) => {
    const [totalPatients, totalAppointments, todayAppointments, pendingRecords] = await Promise.all([
      prisma.patient.count({
        where: {
          appointments: {
            some: { doctor_id: user.id }
          }
        }
      }),
      prisma.appointment.count({
        where: { doctor_id: user.id }
      }),
      prisma.appointment.count({
        where: {
          doctor_id: user.id,
          date_time: {
            gte: new Date(new Date().setHours(0, 0, 0, 0)),
            lte: new Date(new Date().setHours(23, 59, 59, 999))
          }
        }
      }),
      prisma.medicalRecord.count({
        where: { doctor_id: user.id }
      })
    ]);
    
    return {
      stats: {
        totalPatients,
        totalAppointments,
        todayAppointments,
        pendingRecords
      }
    };
  });
