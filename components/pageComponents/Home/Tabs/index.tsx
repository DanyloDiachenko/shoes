import Link from "next/link";
import styles from "./styles.module.scss";
import { TabsProps } from "./tabs.props";
import { tabs } from "./tabs";

export const Tabs = ({ activeTabSlug, onSetActiveTabClick }: TabsProps) => {
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
                        onClick={() => onSetActiveTabClick(tab.slug)}
                    >
                        {tab.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
