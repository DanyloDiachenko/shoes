import styles from "./styles.module.scss";
import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaPinterest,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ISocial } from "./social.interface";
import Link from "next/link";

const socials: ISocial[] = [
    {
        title: "Facebook",
        link: "#",
        icon: <FaFacebookF />,
    },
    {
        title: "Twitter",
        link: "#",
        icon: <FaXTwitter />,
    },
    {
        title: "Instagram",
        link: "#",
        icon: <FaInstagram />,
    },
    {
        title: "Youtube",
        link: "#",
        icon: <FaYoutube />,
    },
    {
        title: "Pinterest",
        link: "#",
        icon: <FaPinterest />,
    },
];

export const Socials = () => {
    return (
        <div className={styles.socialIcons}>
            {socials.map((social, index) => (
                <Link
                    href="#"
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
