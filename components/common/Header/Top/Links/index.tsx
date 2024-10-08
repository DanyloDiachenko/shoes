"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { setOpenedPopup } from "@/store/slices/openedPopup";
import { Popup } from "@/types/popup.type";
import styles from "./styles.module.scss";
import { BsTelephone } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

export const Links = () => {
    const dispatch = useDispatch();

    const setOpenedPopupHandler = (popupToOpen: Popup) => {
        dispatch(setOpenedPopup(popupToOpen));
    };

    return (
        <div className={styles.headerRight}>
            <ul className={styles.topMenu}>
                <li className={styles.liMain}>
                    <Link href="#" className={styles.mobileLink}>
                        <span>Links</span>
                        <IoIosArrowDown />
                    </Link>
                    <ul className={styles.links}>
                        <li>
                            <Link href="tel:#" className={styles.iconLink}>
                                <BsTelephone className={styles.phoneIcon} />
                                <span>Call: +0123 456 789</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="wishlist.html"
                                className={styles.iconLink}
                            >
                                <FaRegHeart />
                                <span>
                                    Wishlist{" "}
                                    <span className={styles.wishlistQuantity}>
                                        (3)
                                    </span>
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link href="about.html">About Us</Link>
                        </li>
                        <li>
                            <Link href="contact.html">Contact Us</Link>
                        </li>
                        <li>
                            <Link
                                href="#"
                                onClick={() =>
                                    setOpenedPopupHandler("authorization")
                                }
                                className={styles.iconLink}
                            >
                                <AiOutlineUser />
                                <span>Login</span>
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
