"use client";

import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setMobileMenuState } from "@/store/slices/mobileMenu";
import { Socials } from "./Socials";
import { getNavigation } from "@/helpers/getNavigation";
import Link from "next/link";
import { NavigationItem } from "@/interfaces/navigationItem";

export const MobileMenu = () => {
    const dispatch = useDispatch();
    const isOpened = useSelector(
        (state: RootState) => state.mobileMenu.isOpened
    );

    const [activeTabIndex, setActiveTabIndex] = useState<number>(-1);
    const [navigation, setNavigation] = useState<NavigationItem[]>([]);

    const setMobileMenuStateHandler = (isOpened: boolean) => {
        dispatch(setMobileMenuState(isOpened));
    };

    const onTabClick = (index: number) => {
        if (index === activeTabIndex) {
            setActiveTabIndex(-1);
        } else {
            setActiveTabIndex(index);
        }
    };

    useEffect(() => {
        getNavigation().then((data) => setNavigation(data));
    }, []);

    return (
        <>
            <div
                className={`${styles.mobileMenuOverlay} ${
                    isOpened ? styles.active : ""
                }`}
                onClick={() => setMobileMenuStateHandler(false)}
            ></div>
            <div
                className={`${styles.mobileMenuContainer} ${
                    isOpened ? styles.active : ""
                }`}
            >
                <div className={styles.mobileMenuWrapper}>
                    <button
                        className={styles.mobileMenuClose}
                        onClick={() => setMobileMenuStateHandler(false)}
                    >
                        <IoMdClose />
                    </button>
                    <nav className={styles.mobileNav}>
                        <ul className={styles.mobileMenu}>
                            {navigation.map((navigationItem, index) => (
                                <li
                                    className={
                                        activeTabIndex === index
                                            ? styles.active
                                            : ""
                                    }
                                    key={index}
                                >
                                    <div className={styles.mainLinkWrapper}>
                                        {navigationItem.link ? (
                                            <Link
                                                href={navigationItem.link}
                                                className={styles.mainLink}
                                            >
                                                {navigationItem.title}
                                            </Link>
                                        ) : (
                                            <div className={styles.mainLink}>
                                                {navigationItem.title}
                                            </div>
                                        )}
                                        <button
                                            className={styles.menuBtn}
                                            onClick={() => onTabClick(index)}
                                        >
                                            <IoIosArrowDown
                                                className={
                                                    activeTabIndex === index
                                                        ? styles.reversed
                                                        : ""
                                                }
                                            />
                                        </button>
                                    </div>
                                    <div className={styles.sublinksWrapper}>
                                        <ul>
                                            {navigationItem.sublinks.map(
                                                (sublink, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href={sublink.link}
                                                        >
                                                            <span>
                                                                {sublink.title}
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
                    <Socials />
                </div>
            </div>
        </>
    );
};
