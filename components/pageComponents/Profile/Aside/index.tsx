import styles from "./styles.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getServerPathname } from "@/helpers/getServerPathname";

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

export const ProfileAside = async () => {
    const pathname = await getServerPathname();

    return (
        <aside className={styles.aside}>
            <ul className={styles.navigation} role="tablist">
                {navigation.map((nav, index) => (
                    <li
                        key={index}
                        className={`${styles.navItem} ${
                            pathname === nav.link ? styles.active : ""
                        }`}
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
            </ul>
        </aside>
    );
};
