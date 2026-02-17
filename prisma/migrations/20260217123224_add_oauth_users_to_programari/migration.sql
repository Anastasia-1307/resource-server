-- AddForeignKey
ALTER TABLE "programari" ADD CONSTRAINT "programari_oauth_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "oauth_users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
