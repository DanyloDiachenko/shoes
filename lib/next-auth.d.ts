import NextAuth from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            email: string;
            token: string;
        };
    }
    interface User {
        id: string;
        token: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT extends NextAuthJWT {
        id?: string;
        token?: string;
    }
}
