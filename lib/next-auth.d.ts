import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT as NextAuthJWT } from "next-auth/jwt";

declare module "next-auth" {
    interface User extends DefaultUser {
        id: string;
        token?: string;
    }

    interface Session {
        user: {
            id: string;
            email: string;
            token?: string;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT extends NextAuthJWT {
        id: string;
        email: string;
        token?: string;
    }
}
