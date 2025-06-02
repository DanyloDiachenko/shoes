import Link from "next/link";
import styles from "./styles.module.scss";
import { socials } from "@/data/socials";

export const WishlistShare = () => {
    return (
        <div className={styles.wishlistShare}>
            <div className={styles.socialIcons}>
                <label className={styles.socialsLabel}>Share on:</label>
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
        </div>
    );
};
