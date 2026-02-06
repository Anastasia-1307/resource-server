// @ts-nocheck
import { Elysia } from "elysia";
import { authMiddleware } from "../middleware/auth-middleware";
import { requireMedic } from "../middleware/role-middleware";
import { PrismaClient } from '../generated/prisma';

const prisma = new PrismaClient();

export const medicRoutes = new Elysia({ prefix: "/api" })
  .derive(authMiddleware)
  .derive(requireMedic)
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
  
  // Get doctor's appointments
  .get("/medic/appointments", async ({ user, query }) => {
    const { date, status } = query as { date?: string, status?: string };
    
    const where: any = { doctor_id: user.id };
    
    if (date) {
      const startOfDay = new Date(date);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      
      where.date_time = {
        gte: startOfDay,
        lte: endOfDay
      };
    }
    
    if (status) {
      where.status = status;
    }
    
    const appointments = await prisma.appointment.findMany({
      where,
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
    
    // Transform appointments to match frontend interface
    const transformedAppointments = appointments.map(apt => ({
      id: apt.id,
      patient_name: apt.patient.user.username,
      patient_email: apt.patient.user.email,
      date: apt.date_time.toISOString().split('T')[0],
      time: apt.date_time.toTimeString().slice(0, 5),
      status: apt.status === 'programata' ? 'scheduled' : 
              apt.status === 'finalizata' ? 'completed' : 
              apt.status === 'anulata' ? 'cancelled' : 'scheduled',
      notes: apt.notes || ''
    }));
    
    return { appointments: transformedAppointments, total: transformedAppointments.length };
  })
  
  // Create new appointment
  .post("/medic/appointments", async ({ body, user }) => {
    const { patient_id, date, time, notes } = body as {
      patient_id: string;
      date: string;
      time: string;
      notes?: string;
    };
    
    // Combine date and time into datetime
    const dateTime = new Date(`${date}T${time}:00`);
    
    // Check if patient exists
    const patient = await prisma.patient.findUnique({
      where: { id: patient_id }
    });
    
    if (!patient) {
      throw new Error("Patient not found");
    }
    
    // Create appointment
    const appointment = await prisma.appointment.create({
      data: {
        doctor_id: user.id,
        patient_id,
        date_time: dateTime,
        status: 'programata',
        notes: notes || null
      },
      include: {
        patient: {
          include: {
            user: true
          }
        }
      }
    });
    
    // Transform to match frontend interface
    const transformedAppointment = {
      id: appointment.id,
      patient_name: appointment.patient.user.username,
      patient_email: appointment.patient.user.email,
      date: appointment.date_time.toISOString().split('T')[0],
      time: appointment.date_time.toTimeString().slice(0, 5),
      status: appointment.status === 'programata' ? 'scheduled' : 
              appointment.status === 'finalizata' ? 'completed' : 
              appointment.status === 'anulata' ? 'cancelled' : 'scheduled',
      notes: appointment.notes || ''
    };
    
    return transformedAppointment;
  })
  
  // Delete/cancel appointment
  .delete("/medic/appointments/:id", async ({ params, user }) => {
    const appointment = await prisma.appointment.findFirst({
      where: {
        id: params.id,
        doctor_id: user.id
      }
    });
    
    if (!appointment) {
      throw new Error("Appointment not found or unauthorized");
    }
    
    // Update status to cancelled instead of deleting
    await prisma.appointment.update({
      where: { id: params.id },
      data: {
        status: 'anulata',
        updated_at: new Date()
      }
    });
    
    return { message: "Appointment cancelled successfully" };
  })
  
  // Get appointment details
  .get("/medic/appointments/:id", async ({ params, user }) => {
    const appointment = await prisma.appointment.findFirst({
      where: {
        id: params.id,
        doctor_id: user.id
      },
      include: {
        patient: {
          include: {
            user: true
          }
        },
        medicalRecord: true
      }
    });
    
    if (!appointment) {
      throw new Error("Appointment not found");
    }
    
    return { appointment };
  })
  
  // Update appointment status
  .put("/medic/appointments/:id/status", async ({ params, body, user }) => {
    const { status } = body as { status: string };
    
    const appointment = await prisma.appointment.updateMany({
      where: {
        id: params.id,
        doctor_id: user.id
      },
      data: {
        status,
        updated_at: new Date()
      }
    });
    
    if (appointment.count === 0) {
      throw new Error("Appointment not found or unauthorized");
    }
    
    return { message: "Appointment status updated successfully" };
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
    
    const medicalRecord = await prisma.medicalRecord.updateMany({
      where: {
        id: params.id,
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
    const medicalRecord = await prisma.medicalRecord.findFirst({
      where: {
        id: params.id,
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
