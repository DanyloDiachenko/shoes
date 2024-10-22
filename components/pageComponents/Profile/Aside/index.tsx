import styles from "./styles.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { usePathname } from "next/navigation";

const navigation = [
    {
        title: "Dashboard",
        link: "/dashboard",
        key: "dashboard",
    },
    {
        title: "Orders",
        link: "/dashboard/orders",
        key: "orders",
    },
    {
        title: "Addresses",
        link: "/dashboard/addresses",
        key: "addresses",
    },
    {
        title: "Account Details",
        link: "/dashboard/account",
        key: "account",
    },
    {
        title: "Sign Out",
        link: "/dashboard/signout",
        key: "signout",
    },
];

export const ProfileAside = () => {
    const pathname = usePathname();

    return (
        <aside className={styles.aside}>
            <ul className={styles.navigation} role="tablist">
                {navigation.map((nav, index) => (
                    <li
                        key={index}
                        className={`${styles.navItem} ${styles.active}`}
                    >
                        <IoIosArrowRoundForward className={styles.arrow} />
                        <a
                            className={styles.navLink}
                            id={`tab-${nav.key}-link`}
                            href={nav.link}
                            role="tab"
                            aria-controls={`tab-${nav.key}`}
                            aria-selected="true"
                        >
                            {nav.title}
                        </a>
                    </li>
                ))}

                <li className={styles.navItem}>
                    <a
                        className={styles.navLink}
                        id="tab-orders-link"
                        href="#tab-orders"
                        role="tab"
                        aria-controls="tab-orders"
                        aria-selected="false"
                    >
                        Orders
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a
                        className={styles.navItem}
                        id="tab-downloads-link"
                        href="#tab-downloads"
                        role="tab"
                        aria-controls="tab-downloads"
                        aria-selected="false"
                    >
                        Downloads
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a
                        className={styles.navLink}
                        id="tab-address-link"
                        href="#tab-address"
                        role="tab"
                        aria-controls="tab-address"
                        aria-selected="false"
                    >
                        Adresses
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a
                        className={styles.navLink}
                        id="tab-account-link"
                        href="#tab-account"
                        role="tab"
                        aria-controls="tab-account"
                        aria-selected="false"
                    >
                        Account Details
                    </a>
                </li>
                <li className={styles.navItem}>
                    <a className={styles.navLink} href="#">
                        Sign Out
                    </a>
                </li>
            </ul>
        </aside>
    );
};
