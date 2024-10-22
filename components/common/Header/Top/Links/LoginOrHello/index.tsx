import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import styles from "./styles.module.scss";
import Link from "next/link";
import { AiOutlineUser } from "react-icons/ai";
import { getServerSession } from "next-auth";

export const LoginOrHello = async () => {
    const session = await getServerSession(authOptions);

    return (
        <Link href={session ? "#" : "/login"} className={styles.iconLink}>
            <AiOutlineUser />
            <span>{session ? `Hello, ${session.user.email}` : "LOGIN"}</span>
        </Link>
    );
};