/*
  Warnings:

  - The primary key for the `oauth_users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `oauth_users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `observatii` on the `programari` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `programari` table. All the data in the column will be lost.
  - You are about to drop the column `password_salt` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "programari" DROP CONSTRAINT "programari_user_id_fkey";

-- DropForeignKey
ALTER TABLE "user_logs" DROP CONSTRAINT "user_logs_user_id_fkey";

-- DropIndex
DROP INDEX "programari_user_id_idx";

-- AlterTable
ALTER TABLE "oauth_users" DROP CONSTRAINT "oauth_users_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL,
ADD CONSTRAINT "oauth_users_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "programari" DROP COLUMN "observatii",
DROP COLUMN "status",
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "sessions" ALTER COLUMN "expires_at" SET DATA TYPE TIMESTAMPTZ(6),
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMPTZ(6);

-- AlterTable
ALTER TABLE "users" DROP COLUMN "password_salt",
ALTER COLUMN "role" DROP NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'pacient',
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "updated_at" DROP NOT NULL;

-- CreateTable
CREATE TABLE "specialitati" (
    "id" SERIAL NOT NULL,
    "nume" VARCHAR(100) NOT NULL,
    "descriere" TEXT,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "specialitati_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "medic_info" (
    "id" SERIAL NOT NULL,
    "nume" VARCHAR(100) NOT NULL,
    "prenume" VARCHAR(100) NOT NULL,
    "experienta" INTEGER NOT NULL,
    "specialitate_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "medic_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "program_lucru" (
    "id" SERIAL NOT NULL,
    "medic_info_id" INTEGER NOT NULL,
    "ora_inceput" TIMESTAMPTZ(6),
    "ora_sfarsit" TIMESTAMPTZ(6),
    "activ" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "program_lucru_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "programari" ADD CONSTRAINT "programari_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "medic_info" ADD CONSTRAINT "medic_info_specialitate_id_fkey" FOREIGN KEY ("specialitate_id") REFERENCES "specialitati"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "program_lucru" ADD CONSTRAINT "program_lucru_medic_info_id_fkey" FOREIGN KEY ("medic_info_id") REFERENCES "medic_info"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
