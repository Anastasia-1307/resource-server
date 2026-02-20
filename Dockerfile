# syntax=docker/dockerfile:1

# Folosim imaginea oficială Bun pe bază de Alpine
FROM oven/bun:1.1-alpine

# Setăm variabila de mediu pentru dezvoltare
ENV NODE_ENV=development

# Instalăm bibliotecile necesare pentru Prisma pe Alpine
# Prisma are nevoie de openssl pentru a rula query engine-ul
RUN apk add --no-cache openssl libssl3 libcrypto3 libc6-compat

WORKDIR /usr/src/app

# Copiem fișierele de dependințe (Bun folosește bun.lockb de regulă)
# Folosim * pentru a nu da eroare dacă fișierul lock lipsește temporar
COPY package.json bun.lockb* ./

# Instalăm pachetele folosind Bun (mult mai rapid decât npm)
RUN bun install --frozen-lockfile

# Copiem restul codului sursă
COPY . .

# Generăm Prisma Client folosind bunx (echivalentul npx)
RUN bunx prisma generate

# Expunem portul 5000 (specificat în codul tău)
EXPOSE 5000

# Pornim serverul de dezvoltare
CMD ["bun", "run", "dev"]