/*
  Warnings:

  - You are about to alter the column `password_hash` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.
  - Made the column `role` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "programari" ADD COLUMN     "pacient_id" UUID;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "cnp" VARCHAR(13),
ADD COLUMN     "phone" VARCHAR(20),
ALTER COLUMN "username" SET DATA TYPE VARCHAR(100),
ALTER COLUMN "password_hash" DROP NOT NULL,
ALTER COLUMN "password_hash" SET DATA TYPE VARCHAR(255),
ALTER COLUMN "role" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "programari" ADD CONSTRAINT "programari_pacient_id_fkey" FOREIGN KEY ("pacient_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE NO ACTION;
