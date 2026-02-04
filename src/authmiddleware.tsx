import { jwtVerify, createRemoteJWKSet } from "jose";

import prisma  from "./lib/prisma";



interface User {

    id: string | number;

    email: string;

    username: string;

    role: string;

}



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



        // Check if user exists in either users table (classic) or oauth_users table (OAuth)

        const [classicUser, oauthUser] = await Promise.all([

            prisma.users.findUnique({

                where: { id: payload.sub as string },

                select: {

                    id: true,

                    email: true,

                    username: true,

                    role: true,

                },

            }),

            prisma.oauth_users.findFirst({

                where: { email: payload.email as string },

                select: {

                    id: true,

                    email: true,

                    username: true,

                    role: true, // Include role from oauth_users table

                },

            })

        ]);



        const user = classicUser || oauthUser;



        if (!user) {

            console.log("❌ User not found in either table for sub:", payload.sub);

            set.status = 401;

            throw new Error("User not found");

        }



        // For OAuth users, use role from oauth_users table or fallback to JWT payload

        const userWithRole: User = classicUser ? user as User : {

            ...user,

            role: (user as any).role || (payload.role as string) || "pacient"

        };



        console.log("✅ User found:", { 

            email: userWithRole.email, 

            role: userWithRole.role, 

            type: classicUser ? 'classic' : 'oauth' 

        });



        return { user: userWithRole };

    } catch {

        set.status = 401;

        throw new Error("Invalid token");

    }

};

