"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { setCookie } from "@/helpers/setCookie";
import { signOut } from "next-auth/react";

export const Logout = () => {
    const onLogoutClick = async () => {
        setCookie("token", "");
        signOut();
    };

    return (
        <li className={`${styles.navItem}`}>
            <Link
                className={styles.navLink}
                id={`tab-signout-link`}
                href={"#"}
                role="tab"
                aria-controls={`tab-signout`}
                aria-selected={false}
                onClick={onLogoutClick}
            >
                Log Out
            </Link>
        </li>
    );
};
