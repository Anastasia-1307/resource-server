// Test admin API endpoints with authentication
async function testAdminAPIs() {
  console.log('🔍 Testing admin API endpoints...');
  
  // First, let's get a valid token by logging in
  console.log('\n=== Step 1: Getting auth token ===');
  
  try {
    // Try to login to get a token
    const loginResponse = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'mitudaniel@gmail.com', // Admin user from database
        password: 'password123' // You'll need to use the actual password
      })
    });
    
    if (!loginResponse.ok) {
      console.error('❌ Login failed:', loginResponse.status);
      const text = await loginResponse.text();
      console.error('Login error:', text);
      return;
    }
    
    const loginData = await loginResponse.json();
    console.log('✅ Login successful');
    console.log('🔍 Token received:', !!loginData.token);
    
    const token = loginData.token;
    
    if (!token) {
      console.error('❌ No token in login response');
      return;
    }
    
    // Now test admin endpoints with the token
    console.log('\n=== Step 2: Testing admin endpoints ===');
    
    const endpoints = [
      'http://localhost:5000/api/admin/specialitati',
      'http://localhost:5000/api/admin/medic-info',
      'http://localhost:5000/api/admin/oauth-users-merged',
      'http://localhost:5000/api/admin/users',
      'http://localhost:5000/api/admin/user-logs'
    ];

    for (const endpoint of endpoints) {
      try {
        console.log(`\n--- Testing ${endpoint} ---`);
        
        const response = await fetch(endpoint, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });
        
        console.log(`Status: ${response.status}`);
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ Success!');
          console.log('📊 Data type:', typeof data);
          console.log('📊 Is array:', Array.isArray(data));
          
          if (Array.isArray(data)) {
            console.log(`📊 Array length: ${data.length}`);
            if (data.length > 0) {
              console.log('📊 Sample item:', data[0]);
            }
          } else if (data.users && Array.isArray(data.users)) {
            console.log(`📊 Users array length: ${data.users.length}`);
            if (data.users.length > 0) {
              console.log('📊 Sample user:', data.users[0]);
            }
          } else if (data.logs && Array.isArray(data.logs)) {
            console.log(`📊 Logs array length: ${data.logs.length}`);
            if (data.logs.length > 0) {
              console.log('📊 Sample log:', data.logs[0]);
            }
          } else {
            console.log('📊 Data structure:', Object.keys(data));
            console.log('📊 Data:', data);
          }
        } else {
          const errorText = await response.text();
          console.error('❌ Error response:', errorText);
        }
      } catch (error) {
        console.error(`❌ Network error:`, error.message);
      }
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  }
}

testAdminAPIs();
