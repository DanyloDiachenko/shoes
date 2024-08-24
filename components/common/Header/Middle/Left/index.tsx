import Link from "next/link";
import headerNavigation from "../../../../../data/headerNavigation.json";
import styles from "./styles.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";

export const Left = () => {
    return (
        <div className={styles.headerLeft}>
            <button className={styles.mobileMenuToggler}>
                <span className="sr-only">Toggle mobile menu</span>
                <RxHamburgerMenu />
            </button>
            <Link href="/" className={styles.logo}>
                <img
                    src="/images/icons/logo.png"
                    alt="Molla Logo"
                    width="105"
                    height="25"
                />
            </Link>
            <nav className={styles.mainNav}>
                <ul className={styles.menu}>
                    {headerNavigation.map((item, index) => (
                        <li key={index} className={styles.linksWrapper}>
                            <Link href={item.url} className={styles.mainLink}>
                                {item.title} <IoIosArrowDown />
                            </Link>
                            <ul className={styles.sublinks}>
                                {item.sublinks.map((sublink, index) => (
                                    <li key={index}>
                                        <Link href={sublink.url}>
                                            {sublink.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
