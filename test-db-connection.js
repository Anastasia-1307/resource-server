// Test database connection and data extraction
import { PrismaClient } from '../src/generated/prisma';

const prisma = new PrismaClient();

async function testDatabaseConnection() {
  console.log('🔍 Testing database connection...');
  
  try {
    // Test basic connection
    await prisma.$connect();
    console.log('✅ Database connected successfully');
    
    // Test each table
    console.log('\n=== Testing specialitati ===');
    const specialitati = await prisma.specialitati.findMany();
    console.log(`📊 Specialitati count: ${specialitati.length}`);
    console.log('📊 Sample specialitati:', specialitati.slice(0, 2));
    
    console.log('\n=== Testing medic_info ===');
    const medicInfo = await prisma.medicInfo.findMany({
      include: {
        specialitati: true
      }
    });
    console.log(`📊 Medic info count: ${medicInfo.length}`);
    console.log('📊 Sample medic info:', medicInfo.slice(0, 2));
    
    console.log('\n=== Testing users ===');
    const users = await prisma.users.findMany();
    console.log(`📊 Users count: ${users.length}`);
    console.log('📊 Sample users:', users.slice(0, 2));
    
    console.log('\n=== Testing oauth_users ===');
    const oauthUsers = await prisma.oauth_users.findMany();
    console.log(`📊 OAuth users count: ${oauthUsers.length}`);
    console.log('📊 Sample oauth users:', oauthUsers.slice(0, 2));
    
    console.log('\n=== Testing user_logs ===');
    const userLogs = await prisma.user_logs.findMany();
    console.log(`📊 User logs count: ${userLogs.length}`);
    console.log('📊 Sample user logs:', userLogs.slice(0, 2));
    
    console.log('\n=== Testing programari ===');
    const programari = await prisma.programari.findMany();
    console.log(`📊 Programari count: ${programari.length}`);
    console.log('📊 Sample programari:', programari.slice(0, 2));
    
  } catch (error) {
    console.error('❌ Database connection error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

testDatabaseConnection();
