import { authOptions } from "@/lib/auth";
import styles from "./styles.module.scss";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { getProfile } from "@/api/auth";

export const LoginOrHello = async () => {
    const profile = await getProfile();

    return (
        <>
            <Link
                href={session ? "/dashboard" : "/login"}
                className={styles.iconLink}
            >
                <AiOutlineUser />
                <span>
                    {session ? `Hello, ${session.user.email}` : "LOGIN"}
                </span>
            </Link>
        </>
    );
};
