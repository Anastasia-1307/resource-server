-- AlterTable
ALTER TABLE "programari" ADD COLUMN     "status" VARCHAR(20) NOT NULL DEFAULT 'programat';

-- AlterTable
ALTER TABLE "refresh_tokens" ADD COLUMN     "oauth_user_id" UUID;

-- CreateTable
CREATE TABLE "password_reset_tokens" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "expires_at" TIMESTAMPTZ(6) NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "used" BOOLEAN NOT NULL DEFAULT false,
    "user_type" VARCHAR(20) NOT NULL,

    CONSTRAINT "password_reset_tokens_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "password_reset_tokens_token_key" ON "password_reset_tokens"("token");

-- CreateIndex
CREATE INDEX "idx_rt_oauth_user" ON "refresh_tokens"("oauth_user_id");
