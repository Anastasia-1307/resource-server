import { Elysia } from "elysia";
import prisma from "../lib/prisma";

export const syncRoutes = new Elysia({ prefix: "/api/sync" })
  .post("/oauth-user", async ({ body, set }) => {
    try {
      const { id, email, username, role } = body as any;
      
      console.log("🔍 Sync OAuth User - Data:", { id, email, username, role });

      // Check if user already exists
      const existingUser = await prisma.oauth_users.findUnique({
        where: { email }
      });

      if (existingUser) {
        // Update existing user
        const updatedUser = await prisma.oauth_users.update({
          where: { email },
          data: {
            username,
            role: role || "pacient", // Update role from auth server
            updated_at: new Date()
          }
        });
        
        console.log("✅ OAuth user updated:", updatedUser.email);
        return { message: "User updated successfully", user: updatedUser };
      } else {
        // Create new user (without password for OAuth users)
        const newUser = await prisma.oauth_users.create({
          data: {
            email,
            username,
            role: role || "pacient", // Include role from auth server
            password_hash: "oauth_user_no_password", // Placeholder for OAuth users
            created_at: new Date(),
            updated_at: new Date()
          }
        });
        
        console.log("✅ OAuth user created:", newUser.email);
        return { message: "User created successfully", user: newUser };
      }
    } catch (error) {
      console.error("❌ Sync OAuth User Error:", error);
      set.status = 500;
      return { error: "Failed to sync OAuth user" };
    }
  });
