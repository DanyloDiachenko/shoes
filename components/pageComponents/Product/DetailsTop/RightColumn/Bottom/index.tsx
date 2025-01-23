import Link from "next/link";
import { ISocialMedia } from "./socialMedia.interface";
import styles from "./styles.module.scss";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaPinterest,
} from "react-icons/fa";
import { BottomProps } from "./bottom.props";

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

export const Bottom = ({ product }: BottomProps) => {
    return (
        <div className={styles.bottom}>
            <div className={styles.category}>
                <span>Category:</span>
                {product.categories.map((category, index) => (
                    <span key={category.id}>
                        <Link href={`/products?categories=${category.slug}`}>
                            {category.title}
                        </Link>
                        {product.categories.length - 1 === index ? "" : ", "}
                    </span>
                ))}
            </div>
            <div className={styles.socialIcons}>
                <span className={styles.label}>Share:</span>
                {socials.map((social, index) => (
                    <Link
                        key={index}
                        href={social.link}
                        className={styles.icon}
                        title={social.title}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {social.icon}
                    </Link>
                ))}
            </div>
        </div>
    );
};
