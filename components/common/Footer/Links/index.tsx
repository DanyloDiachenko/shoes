import { ILink } from "./link.interface";
import styles from "./styles.module.scss";

const links: ILink[] = [
    {
        title: "Useful Links",
        links: [
            { title: "About Molla", link: "about.html" },
            { title: "How to shop on Molla", link: "#" },
            { title: "FAQ", link: "#" },
            { title: "Contact us", link: "contact.html" },
            { title: "Log in", link: "login.html" },
        ],
    },
    {
        title: "Customer Service",
        links: [
            { title: "Payment Methods", link: "#" },
            { title: "Money-back guarantee!", link: "#" },
            { title: "Returns", link: "#" },
            { title: "Shipping", link: "#" },
            { title: "Terms and conditions", link: "#" },
            { title: "Privacy Policy", link: "#" },
        ],
    },
    {
        title: "My Account",
        links: [
            { title: "Sign In", link: "#" },
            { title: "View Cart", link: "#" },
            { title: "My Wishlist", link: "#" },
            { title: "Track My Order", link: "#" },
            { title: "Help", link: "#" },
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
                                    <a href={sublink.link}>{sublink.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
};
