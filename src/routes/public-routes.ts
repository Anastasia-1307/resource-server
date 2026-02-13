import { Elysia } from 'elysia';
import prisma from '../lib/prisma';

export const publicRoutes = new Elysia({ prefix: '/api' })
  .get("/public/program-lucru", async () => {
    console.log("🔍 Public Routes - GET /public/program-lucru called");
    try {
      const programLucru = await prisma.program_lucru.findMany({
        orderBy: {
          created_at: 'desc'
        },
        include: {
          medic_info: {
            select: {
              nume: true,
              prenume: true,
              specialitati: true
            }
          }
        }
      });
      
      console.log("🔍 Public Routes - Program lucru found:", programLucru.length);
      return programLucru;
    } catch (error) {
      console.log("❌ Public Routes - Program lucru error:", error);
      // Return empty array instead of throwing error to prevent frontend from failing
      return [];
    }
  });
