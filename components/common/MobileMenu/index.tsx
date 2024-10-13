"use client";

import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import headerNavigation from "../../../data/headerNavigation.json";
import { useState } from "react";
import Link from "next/link";

export const MobileMenu = () => {
    const [activeTabIndex, setActiveTabIndex] = useState<number>(-1);

    const onTabClick = (index: number) => {
        if (index === activeTabIndex) {
            setActiveTabIndex(-1);
        } else {
            setActiveTabIndex(index);
        }
    };

    return (
        <>
            <div
                className={`${styles.mobileMenuOverlay} ${styles.active}`}
            ></div>
            <div className={`${styles.mobileMenuContainer} ${styles.active}`}>
                <div className={styles.mobileMenuWrapper}>
                    <button className={styles.mobileMenuClose}>
                        <IoMdClose />
                    </button>
                    <nav className={styles.mobileNav}>
                        <ul className={styles.mobileMenu}>
                            {headerNavigation.map((headerNavItem, index) => (
                                <li
                                    className={
                                        activeTabIndex === index
                                            ? styles.active
                                            : ""
                                    }
                                    key={index}
                                >
                                    <div className={styles.mainLinkWrapper}>
                                        <Link
                                            href={headerNavItem.link}
                                            className={styles.mainLink}
                                        >
                                            {headerNavItem.title}
                                        </Link>
                                        <button
                                            className={styles.menuBtn}
                                            onClick={() => onTabClick(index)}
                                        >
                                            <IoIosArrowDown />
                                        </button>
                                    </div>
                                    <div className={styles.sublinksWrapper}>
                                        <ul>
                                            {headerNavItem.sublinks.map(
                                                (sublink, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href={sublink.link}
                                                        >
                                                            <span>
                                                                {sublink.title}
                                                                {sublink.isNew && (
                                                                    <span
                                                                        className={
                                                                            styles.tip
                                                                        }
                                                                    >
                                                                        new
                                                                    </span>
                                                                )}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={styles.socialIcons}>
                        <a
                            href="#"
                            className={styles.socialIcon}
                            target="_blank"
                            title="Facebook"
                        >
                            <i className="icon-facebook-f"></i>
                        </a>
                        <a
                            href="#"
                            className={styles.socialIcon}
                            target="_blank"
                            title="Twitter"
                        >
                            <i className="icon-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className={styles.socialIcon}
                            target="_blank"
                            title="Instagram"
                        >
                            <i className="icon-instagram"></i>
                        </a>
                        <a
                            href="#"
                            className={styles.socialIcon}
                            target="_blank"
                            title="Youtube"
                        >
                            <i className="icon-youtube"></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};
