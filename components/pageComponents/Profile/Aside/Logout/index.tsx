"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { setCookie } from "@/helpers/setCookie";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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

    return (
        <li className={`${styles.navItem}`}>
            <button
                className={styles.navLink}
                id={`tab-signout-link`}
                role="tab"
                aria-controls={`tab-signout`}
                aria-selected={false}
                onClick={onLogoutClick}
            >
                Log Out
            </button>
        </li>
    );
};
