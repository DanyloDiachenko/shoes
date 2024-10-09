import Link from "next/link";
import styles from "./styles.module.scss";
import { TabTitlesProps } from "./tabTitles.props";

export const TabTitles = ({
    activeTab,
    setActiveTab,
    tabs,
}: TabTitlesProps) => {
    return (
        <ul className={styles.tabTitles} role="tablist">
            {tabs.map((tab) => (
                <li className={styles.navItem} key={tab.key}>
                    <Link
                        className={`${styles.navLink} ${
                            activeTab === tab.key ? styles.active : ""
                        }`}
                        id={`${tab.key}-link`}
                        href={`#${tab.key}-tab`}
                        role="tab"
                        aria-controls={`${tab.key}-tab`}
                        aria-selected={activeTab === tab.key}
                        onClick={(e) => {
                            e.preventDefault();
                            setActiveTab(tab.key);
                        }}
                    >
                        {tab.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
