"use client";

import Link from "next/link";
import { setCookie } from "@/helpers/setCookie";
import { useRouter } from "next/navigation";

export const Logout = () => {
    const router = useRouter();

    const onLogoutClick = async () => {
        setCookie("token", "");
        router.push("/login");
    };

    return (
        <Link href="#" onClick={onLogoutClick}>
            Log out
        </Link>
    );
};
