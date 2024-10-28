import { setCookie } from "@/helpers/setCookie";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
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
                rememberMe: {
                    label: "Remember Me",
                    type: "checkbox",
                    placeholder: "Remember Me",
                },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                ...credentials,
                                rememberMe:
                                    credentials.rememberMe === "true"
                                        ? true
                                        : false,
                            }),
                        }
                    );

                    const data = await res.json();

                    (await cookies()).set("token", data.token);

                    if (data.error) {
                        return { status: data?.status, error: data?.message };
                    }

                    return data;
                } catch (error) {
                    return error;
                }
            },
        }),
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret: process.env
                .NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
        }),
    ],
    callbacks: {
        async jwt({ token, user, account, profile }) {
            if (account?.provider === "google" && account.access_token) {
                try {
                    const res = await fetch(
                        `${process.env.NEXT_PUBLIC_API_URL}/auth/google-login`,
                        {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                token: account.access_token,
                            }),
                        }
                    );

                    const data = await res.json();
                    (await cookies()).set("token", data.token);

                    if (res.ok && data?.token) {
                        token.id = data.id;
                        token.email = data.email;
                        token.token = data.token;
                    } else {
                        throw new Error(
                            "Failed to exchange Google token for backend JWT"
                        );
                    }
                } catch (error) {
                    console.error("Error exchanging Google token:", error);
                }
            }

            if (user) {
                token.id = user.id;
                token.email = user.email || "";
                token.token = user.token;
            }

            return token;
        },
        async signIn({ user }: any) {
            if (user?.error) {
                throw new Error(user?.error);
            }
            return true;
        },
        async session({ session, token }) {
            if (token) {
                session.user.id = token.id!;
                session.user.email = token.email!;
                session.user.token = token.token;
            }
            return session;
        },
    },
    secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    jwt: {
        secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/auth/login",
    },
};