import Link from "next/link";
import styles from "./styles.module.scss";
import { BsTelephone } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { LoginOrHello } from "./LoginOrHello";

export const Links = () => {
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
                            <LoginOrHello />
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};
