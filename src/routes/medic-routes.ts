// @ts-nocheck

import { Elysia } from "elysia";

import { authMiddleware } from "../middleware/auth-middleware";

import { requireMedic } from "../middleware/role-middleware";

import { verifyToken } from "../lib/jwt";

import { PrismaClient } from '../generated/prisma';



const prisma = new PrismaClient();



// Logging function

async function logUserAction(userId: string, action: string, resource?: string, details?: any) {

  try {

    await prisma.user_logs.create({

      data: {

        user_id: userId,

        action,

        resource,

        details: details ? JSON.stringify(details) : null,

        created_at: new Date()

      }

    });

    console.log(` LOG: User ${userId} performed ${action}`, resource || '', details || '');

  } catch (error) {

    console.error(' LOG ERROR:', error);

  }

}



// Combined middleware for authentication and role checking

const medicAuthMiddleware = async ({ request, set }: any) => {

  console.log(" Combined Medic Auth Middleware - Request received:", request.method, request.url);

  

  if (!request || !request.headers) {

    console.log(" Combined Medic Auth Middleware - Request or headers undefined");

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

    

    console.log("Combined Medic Auth Middleware - Token verified successfully:", payload);



    // Find user in resource server database by email from JWT

    const dbUser = await prisma.users.findUnique({

      where: { email: payload.email }

    });



    if (!dbUser) {

      console.log("❌ Combined Medic Auth Middleware - User not found in database:", payload.email);

      set.status = 401;

      throw new Error("Not authorized - User not found in database");

    }



    if (dbUser.role !== "medic") {

      console.log("❌ Combined Medic Auth Middleware - Invalid role:", dbUser.role);

      set.status = 403;

      throw new Error("Forbidden - Required role: medic");

    }



    console.log("Combined Medic Auth Middleware - User found in database:", dbUser);

    

    // Return user object to be added to context by .derive()

    return { user: dbUser };

    

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
    try {
      console.log('🔥🔥🔥 GET /medic/appointments - ROUTE HIT!');
      console.log('🔍 GET /medic/appointments - user:', user);
      console.log('🔍 GET /medic/appointments - query:', query);
      console.log('🔍 GET /medic/appointments - request.url:', request.url);
      console.log('🔍 GET /medic/appointments - query:', query);
      
      const { date } = query as { date?: string };
      
      // Get medic info to find medic_id
      let medicInfo = await prisma.medic_info.findFirst({
        where: {
          nume: user.username?.split(' ')[0] || 'Medic',
          prenume: user.username?.split(' ')[1] || user.name?.split(' ')[1] || 'Necunoscut'
        }
      });
      
      console.log("🔍 MEDIC INFO LOOKUP - user.username:", user.username);
      console.log("🔍 MEDIC INFO LOOKUP - medicInfo:", medicInfo);
      
      // If medic info doesn't exist, create it automatically
      if (!medicInfo) {
        console.log("🔍 Medic info not found, creating automatic record...");
        
        // First, check if we have any specialitati to use
        const specialitate = await prisma.specialitati.findFirst();
        const specialitateId = specialitate?.id || 1;
        
        const nameParts = user.username?.split(' ') || ['Medic', 'Necunoscut'];
        
        medicInfo = await prisma.medic_info.create({
          data: {
            nume: nameParts[0],
            prenume: nameParts[1] || 'Necunoscut',
            experienta: 0,
            specialitate_id: specialitateId
          }
        });
        
        console.log("🔍 MEDIC INFO CREATED:", medicInfo);
      }
      
      if (!medicInfo) {
        console.log("❌ Medic info still not found for user:", user.id);
        console.log("❌ Available medic_info records:");
        const allMedicInfo = await prisma.medic_info.findMany({
          select: { id: true, user_id: true, nume: true, prenume: true }
        });
        console.log("🔍 All medic_info records:", allMedicInfo);
        return [];
      }

      // Show all appointments (not filtered by medic_id)
      const where: any = {};
      
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
        status: programare.status || 'programat', // Use actual status from database
        detalii: programare.serviciu || ''
      }));
      
      console.log('🔍 GET /medic/appointments - transformed:', transformedAppointments);
      
      return transformedAppointments; // Return array directly, not wrapped in object
    } catch (error) {
      console.error('❌ ERROR in /medic/appointments:', error);
      console.error('❌ ERROR stack:', error.stack);
      throw error;
    }
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

      // Find patient by email to get their ID

      let pacient_id = null;

      if (pacient_nume) {

        // Try to find patient in both users and oauth_users tables

        let patient = null;

        

        // First try users table

        patient = await prisma.users.findFirst({

          where: {

            OR: [

              { email: pacient_nume },

              { username: pacient_nume }

            ],

            role: 'pacient'

          }

        });

        

        // If not found, try oauth_users table

        if (!patient) {

          patient = await prisma.oauth_users.findFirst({

            where: {

              OR: [

                { email: pacient_nume },

                { username: pacient_nume }

              ],

              role: 'pacient'

            }

          });

        }

        

        if (patient) {

          pacient_id = patient.id;

          console.log('🔍 POST /medic/appointments - Patient found:', patient.email, 'from:', patient.id.includes('-') ? 'users' : 'oauth_users');

        } else {

          console.log('🔍 POST /medic/appointments - Patient not found in either table, using manual name');

        }
      }
      
      // Get medic info to find medic_id
    let medicInfo = await prisma.medic_info.findFirst({
      where: {
        nume: user.username?.split(' ')[0] || 'Medic',
        prenume: user.username?.split(' ')[1] || user.name?.split(' ')[1] || 'Necunoscut'
      }
    });
    
    // If medic info doesn't exist, create it automatically
    if (!medicInfo) {
      console.log("🔍 Medic info not found, creating automatic record...");
      
      // First, check if we have any specialitati to use
      const specialitate = await prisma.specialitati.findFirst();
      const specialitateId = specialitate?.id || 1;
      
      const nameParts = user.username?.split(' ') || ['Medic', 'Necunoscut'];
      
      medicInfo = await prisma.medic_info.create({
        data: {
          nume: nameParts[0],
          prenume: nameParts[1] || 'Necunoscut',
          experienta: 0,
          specialitate_id: specialitateId
        }
      });
      
      console.log("🔍 MEDIC INFO CREATED:", medicInfo);
    }
      
      // Standardize format to match patient appointments
      const nameParts = user.username?.split(' ') || ['Medic', 'Necunoscut'];
      const serviciu = `${nameParts[0]} ${nameParts[1] || 'Necunoscut'} - General - ${time}`;
      
      console.log('🔍 POST /medic/appointments - Creating programare with data:', {
        user_id: pacient_id || user.id, // Use patient ID if found, otherwise medic's ID
        medic_id: medicInfo.id,
        serviciu: serviciu,
        data_programare: dateTime
      });
      

      const programare = await prisma.programari.create({
        data: {
          user_id: pacient_id || user.id, // Use patient ID if found, otherwise medic's ID
          medic_id: medicInfo.id,
          serviciu: serviciu,
          status: 'programat',
          data_programare: dateTime
        }
      });

      console.log('🔍 POST /medic/appointments - programare created:', programare);

      

      // Log the action

      await logUserAction(user.id, 'CREATE_APPOINTMENT', 'programari', {

        appointment_id: programare.id,

        patient_name: pacient_nume,

        patient_id: pacient_id,

        date_time: dateTime,

        notes: notes

      });

      

      // Transform to match frontend interface

      const transformedAppointment = {

        id: programare.id,

        data_programare: programare.data_programare.toISOString().split('T')[0],

        ora_programare: programare.data_programare.toTimeString().slice(0, 5),

        status: programare.status, // Use actual status from database

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

  

  // Get all patients (from both users and oauth_users tables)

 
  

  // Update appointment status
  .put("/medic/appointments/:id/status", async ({ params, body, user }) => {
    console.log('🔍 PUT /medic/appointments/:id/status - REQUEST STARTED');
    console.log('🔍 PUT /medic/appointments/:id/status - params:', params);
    console.log('🔍 PUT /medic/appointments/:id/status - body:', body);
    console.log('🔍 PUT /medic/appointments/:id/status - user:', user);
    
    const { status } = body as { status: 'programat' | 'confirmat' | 'anulat' };
    const appointmentId = parseInt(params.id);
    
    if (!status || !['programat', 'confirmat', 'anulat'].includes(status)) {
      throw new Error('Invalid status. Must be: programat, confirmat, or anulat');
    }
    
    // Get medic info to find medic_id
    let medicInfo = await prisma.medic_info.findFirst({
      where: {
        nume: user.username?.split(' ')[0] || 'Medic',
        prenume: user.username?.split(' ')[1] || user.name?.split(' ')[1] || 'Necunoscut'
      }
    });
    
    if (!medicInfo) {
      console.log("🔍 Medic info not found, creating automatic record...");
      
      // First, check if we have any specialitati to use
      const specialitate = await prisma.specialitati.findFirst();
      const specialitateId = specialitate?.id || 1;
      
      const nameParts = user.username?.split(' ') || ['Medic', 'Necunoscut'];
      
      medicInfo = await prisma.medic_info.create({
        data: {
          nume: nameParts[0],
          prenume: nameParts[1] || 'Necunoscut',
          experienta: 0,
          specialitate_id: specialitateId
        }
      });
      
      console.log("🔍 MEDIC INFO CREATED:", medicInfo);
    }
    
    // Update the appointment status - allow medic to update any appointment
    const updatedAppointment = await prisma.programari.updateMany({
      where: {
        id: appointmentId
      },
      data: {
        status: status,
        updated_at: new Date()
      }
    });
    
    if (updatedAppointment.count === 0) {
      throw new Error("Appointment not found or unauthorized");
    }
    
    // Return the updated appointment
    const appointment = await prisma.programari.findUnique({
      where: { id: appointmentId },
      include: {
        users: {
          select: {
            username: true,
            email: true
          }
        }
      }
    });
    
    // Log the action
    await logUserAction(user.id, 'UPDATE_APPOINTMENT_STATUS', 'programari', {
      appointment_id: appointmentId,
      old_status: 'unknown',
      new_status: status,
      updated_by: user.email
    });
    
    // Transform to match frontend interface
    const transformedAppointment = {
      id: appointment.id,
      data_programare: appointment.data_programare.toISOString().split('T')[0],
      ora_programare: appointment.data_programare.toTimeString().slice(0, 5),
      status: appointment.status,
      detalii: appointment.serviciu || ''
    };
    
    console.log('🔍 PUT /medic/appointments/:id/status - updated appointment:', transformedAppointment);
    
    return transformedAppointment;
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

