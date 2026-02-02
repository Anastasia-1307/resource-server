/**
 * Crypto utilities for password hashing and verification
 * Using Argon2ID - the most secure password hashing algorithm
 */

export async function hashPassword(password: string): Promise<string> {
  return await Bun.password.hash(password, { 
    algorithm: "argon2id" 
  });
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await Bun.password.verify(password, hash);
}

