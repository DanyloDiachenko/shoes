import styles from "./styles.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getServerPathname } from "@/helpers/getServerPathname";
import { navigation } from "./navigation";
import Link from "next/link";
import { Logout } from "./Logout";

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
                        <Link
                            className={styles.navLink}
                            id={`tab-${nav.key}-link`}
                            href={nav.link}
                            role="tab"
                            aria-controls={`tab-${nav.key}`}
                            aria-selected={pathname === nav.link ? true : false}
                        >
                            {nav.title}
                        </Link>
                    </li>
                ))}
                <Logout />
            </ul>
        </aside>
    );
};
