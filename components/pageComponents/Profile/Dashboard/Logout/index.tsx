"use client";

import Link from "next/link";
import { setCookie } from "@/helpers/setCookie";
import { signOut } from "next-auth/react";

export const Logout = () => {
    const onLogoutClick = async () => {
        setCookie("token", "");
        signOut();
    };

    return (
        <Link href="#" onClick={onLogoutClick}>
            Log out
        </Link>
    );
};
