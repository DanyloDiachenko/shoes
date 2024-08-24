import Link from "next/link";
import { ISocialMedia } from "./socialMedia.interface";
import styles from "./styles.module.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
} from "react-icons/fa";

const socials: ISocialMedia[] = [
    {
        title: "Facebook",
        link: "#",
        icon: <FaFacebookF />,
    },
    {
        title: "Twitter",
        link: "#",
        icon: <FaTwitter />,
    },
    {
        title: "Instagram",
        link: "#",
        icon: <FaInstagram />,
    },
    {
        title: "Pinterest",
        link: "#",
        icon: <FaPinterest />,
    },
];

export const Bottom = () => {
    return (
        <div className={styles.bottom}>
            <div className={styles.category}>
                <span>Category:</span>
                <Link href="#">Women</Link>, <Link href="#">Dresses</Link>,{" "}
                <Link href="#">Yellow</Link>
            </div>
            <div className={styles.socialIcons}>
                <span className={styles.label}>Share:</span>
                {socials.map((social, index) => (
                    <a
                        key={index}
                        href={social.link}
                        className={styles.icon}
                        title={social.title}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
        </div>
    );
};
