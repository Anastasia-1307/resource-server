import prisma from "../lib/prisma";
import { AuthUser } from "../lib/jwt";

export class UserService {
  static async findUserById(id: string): Promise<AuthUser | null> {
    const user = await prisma.users.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
      },
    });

    return user;
  }

  static async findUserByEmail(email: string): Promise<AuthUser | null> {
    const user = await prisma.users.findUnique({
      where: { email },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
      },
    });

    return user;
  }

  static async getAllUsers(): Promise<AuthUser[]> {
    const users = await prisma.users.findMany({
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
      },
    });

    return users;
  }

  static async updateUserRole(id: string, role: string): Promise<AuthUser> {
    const user = await prisma.users.update({
      where: { id },
      data: { role },
      select: {
        id: true,
        email: true,
        username: true,
        role: true,
      },
    });

    return user;
  }
}
