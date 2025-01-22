import Link from "next/link";
import styles from "./styles.module.scss";
import { TabsProps } from "./tabs.props";
import { tabs } from "./tabs";

export const Tabs = ({ activeTabSlug, onSetActiveTabClick }: TabsProps) => {
    return (
        <ul className={styles.nav} role="tablist">
            {tabs.map((tab, index) => (
                <li key={index} className={styles.navItem} role="presentation">
                    <Link
                        className={`${styles.navLink} ${
                            activeTabSlug === tab.slug ? styles.active : ""
                        }`}
                        id={`tab-${tab.slug}`}
                        href={`#tab-panel-${tab.slug}`}
                        role="tab"
                        aria-controls={`tab-panel-${tab.slug}`}
                        aria-selected={
                            activeTabSlug === tab.slug ? "true" : "false"
                        }
                        scroll={false}
                        onClick={(e) => {
                            e.preventDefault();
                            onSetActiveTabClick(tab.slug);
                        }}
                    >
                        {tab.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
