import Link from "next/link";
import styles from "./styles.module.scss";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { LoginOrHello } from "./LoginOrHello";
import { Wishlist } from "./Wishlist";
import { getCookie } from "@/helpers/getCookie";

export const Links = async () => {
    const wishlistIdsString = await getCookie("wishlistIds");
    const wishlistIds: string[] = wishlistIdsString ? JSON.parse(wishlistIdsString) : [];

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
                            <Wishlist wishlistIdsServer={wishlistIds} />
                        </li>
                        <li>
                            <Link href="/about">About Us</Link>
                        </li>
                        <li>
                            <Link href="/contact">Contact Us</Link>
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
