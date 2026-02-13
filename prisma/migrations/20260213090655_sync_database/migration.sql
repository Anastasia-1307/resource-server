/*
  Warnings:

  - You are about to drop the column `pacient_id` on the `programari` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `programari` table. All the data in the column will be lost.
  - You are about to drop the column `cnp` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `users` table. All the data in the column will be lost.
  - You are about to alter the column `username` on the `users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - Made the column `password_hash` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "programari" DROP CONSTRAINT "programari_pacient_id_fkey";

-- AlterTable
ALTER TABLE "programari" DROP COLUMN "pacient_id",
DROP COLUMN "status";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "cnp",
DROP COLUMN "phone",
ALTER COLUMN "username" SET DATA TYPE VARCHAR(30),
ALTER COLUMN "password_hash" SET NOT NULL,
ALTER COLUMN "password_hash" SET DATA TYPE TEXT,
ALTER COLUMN "role" DROP NOT NULL;
