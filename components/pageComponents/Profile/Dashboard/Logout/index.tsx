"use client";

import Link from "next/link";
import { setCookie } from "@/helpers/setCookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

export const Logout = () => {
    const router = useRouter();

    const onLogoutClick = async () => {
        setCookie("token", "");
        toast.success("Logged out successfully");
        router.refresh();

        const timeout = setTimeout(() => {
            router.push("/login");
        }, 1000);

        return () => clearTimeout(timeout);
    };

    return <button className={styles.logout} onClick={onLogoutClick}>Log out</button>;
};
