-- Alter table to add medic_nume and medic_prenume columns
ALTER TABLE "program_lucru" 
ADD COLUMN "medic_nume" VARCHAR(100),
ADD COLUMN "medic_prenume" VARCHAR(100);

-- Update existing records with medic names from medic_info
UPDATE "program_lucru" pl
SET "medic_nume" = mi.nume,
    "medic_prenume" = mi.prenume
FROM "program_lucru" pl
INNER JOIN "medic_info" mi ON pl."medic_info_id" = mi.id;
