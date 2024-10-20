import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email", placeholder: "Email" },
                password: {
                    label: "Password",
                    type: "password",
                    placeholder: "Password",
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const { email, password } = credentials;

                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ email, password }),
                        }
                    );

                    const data = await res.json();

                    if (res.ok && data) {
                        cookies().set("token", data.token, {
                            expires: new Date(
                                Date.now() + 1000 * 60 * 60 * 24 * 7
                            ),
                        });

                        return {
                            id: data.id,
                            email: data.email,
                            token: data.token,
                        };
                    }

                    return null;
                } catch (error) {
                    console.error("Error in authorize:", error);
                    return null;
                }
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.email = user.email;
                token.token = user.token;
            }
            return token;
        },

        async session({ session, token }) {
            if (token) {
                session.user.id = token.id!;
                session.user.email = token.email!;
                session.user.token = token.token!;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXTAUTH_SECRET,
    },
    session: {
        strategy: "jwt",
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
