-- AlterTable
ALTER TABLE "programari" ALTER COLUMN "user_id" DROP NOT NULL;

-- RenameForeignKey
ALTER TABLE "programari" RENAME CONSTRAINT "programari_oauth_user_id_fkey" TO "programari_oauth_users_fkey";

-- RenameForeignKey
ALTER TABLE "programari" RENAME CONSTRAINT "programari_user_id_fkey" TO "programari_users_fkey";
