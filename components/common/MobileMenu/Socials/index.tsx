import { socials } from "@/data/socials";
import styles from "./styles.module.scss";

export const Socials = () => {
    return (
        <div className={styles.socialIcons}>
            {socials.map((social, index) => (
                <a
                    key={index}
                    href={social.link}
                    className={styles.socialIcon}
                    target="_blank"
                    title={social.title}
                >
                    {social.icon}
                </a>
            ))}
        </div>
    );
};
