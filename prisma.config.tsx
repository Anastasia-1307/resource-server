
import "dotenv/config";

export default {
    schema: "prisma/schema.prisma",
    datasource: {
        adapter: "postgresql", // sau ce DB folosești
        url: process.env.DATABASE_URL
    },
    migrations: {
        path: "prisma/migrations"
    }
};