import styles from "./styles.module.scss";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { getProfile } from "@/api/auth";

export const LoginOrHello = async () => {
    const profile = await getProfile();

    return (
        <>
            Login or hello
            <Link
                href={"id" in profile ? "/dashboard" : "/login"}
                className={styles.iconLink}
            >
                <AiOutlineUser />
                <span>
                    {"id" in profile ? `Hello, ${profile.email}` : "LOGIN"}
                </span>
            </Link>
        </>
    );
};
