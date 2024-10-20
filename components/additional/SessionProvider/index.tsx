"use client";

import { SessionProviderProps } from "./sessionProvider.props";
import { SessionProvider as NextAuthSessionProvider } from "next-auth/react";

export const SessionProvider = ({ children }: SessionProviderProps) => {
    return <NextAuthSessionProvider>{children}</NextAuthSessionProvider>;
};
