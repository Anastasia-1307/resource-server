import { jwtVerify, createRemoteJWKSet } from "jose";
import prisma  from "./lib/prisma";

const ISSUER = "http://localhost:4000";
const AUDIENCE = "nextjs_client";

const JWKS = createRemoteJWKSet(
    new URL("http://localhost:4000/.well-known/jwks.json")
);

export const authMiddleware = async ({ request, set }: any) => {
    const auth = request.headers.get("authorization");

    if (!auth?.startsWith("Bearer ")) {
        set.status = 401;
        throw new Error("Not authorized");
    }

    const token = auth.slice(7);

    try {
        const { payload } = await jwtVerify(token, JWKS, {
            issuer: ISSUER,
            audience: AUDIENCE,
        });

        const user = await prisma.users.findUnique({
            where: { id: payload.sub as string },
            select: {
                id: true,
                email: true,
                username: true,
                role: true,
            },
        });

        if (!user) {
            set.status = 401;
            throw new Error("User not found");
        }

        return { user };
    } catch {
        set.status = 401;
        throw new Error("Invalid token");
    }
};
