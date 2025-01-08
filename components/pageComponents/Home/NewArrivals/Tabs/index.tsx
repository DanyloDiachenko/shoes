import Link from "next/link";
import styles from "./styles.module.scss";
import { TabsProps } from "./tabs.props";

const tabs = [
    {
        title: "All",
        slug: "all",
    },
    {
        title: "Women's",
        slug: "women",
    },
    {
        title: "Men's",
        slug: "men",
    },
];

export const Tabs = ({ activeTabSlug, setActiveTabSlug }: TabsProps) => {
    return (
        <ul className={styles.nav} role="tablist">
            {tabs.map((tab, index) => (
                <li key={index} className={styles.navItem}>
                    <Link
                        className={`${styles.navLink} ${
                            activeTabSlug === tab.slug ? styles.active : ""
                        }`}
                        id={`"new-${activeTabSlug}-link"`}
                        href={`#new-${activeTabSlug}-tab`}
                        role="tab"
                        aria-controls={`new-${activeTabSlug}-tab`}
                        aria-selected={activeTabSlug === tab.slug}
                        scroll={false}
                        onClick={() => setActiveTabSlug(tab.slug)}
                    >
                        {tab.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
