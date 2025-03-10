import { socials } from "@/data/socials";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Socials = () => {
    return (
        <div className={styles.socialIcons}>
            {socials.map((social, index) => (
                <Link
                    href={social.link}
                    className={styles.socialIcon}
                    target="_blank"
                    title={social.title}
                    key={index}
                >
                    {social.icon}
                </Link>
            ))}
        </div>
    );
};
