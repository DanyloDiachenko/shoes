import Link from "next/link";
import { Link as ILink } from "./link.interface";
import styles from "./styles.module.scss";

const links: ILink[] = [
    {
        title: "Useful Links",
        links: [
            { title: "About Molla", link: "/about" },
            { title: "How to shop on Molla", link: "/about" },
            { title: "FAQ", link: "/faq" },
            { title: "Contact us", link: "/contact" },
            { title: "Log in", link: "/login" },
        ],
    },
    {
        title: "Customer Service",
        links: [
            { title: "Payment Methods", link: "/faq" },
            { title: "Money-back guarantee!", link: "/faq" },
            { title: "Returns", link: "/faq" },
            { title: "Shipping", link: "/faq" },
            { title: "Terms and conditions", link: "/faq" },
            { title: "Privacy Policy", link: "/faq" },
        ],
    },
    {
        title: "My Account",
        links: [
            { title: "Sign In", link: "/login" },
            { title: "View Cart", link: "/cart" },
            { title: "My Wishlist", link: "/wishlist" },
            { title: "Dashboard", link: "/dashboard" },
            { title: "Help", link: "/contact" },
        ],
    },
];

export const Links = () => {
    return (
        <>
            {links.map((link, index) => (
                <div className={styles.column} key={index}>
                    <div className={styles.widget}>
                        <h4 className={styles.widgetTitle}>{link.title}</h4>
                        <ul className={styles.widgetList}>
                            {link.links.map((sublink, index) => (
                                <li key={index}>
                                    <Link href={sublink.link}>{sublink.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
};
