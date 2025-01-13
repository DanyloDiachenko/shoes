import Link from "next/link";
import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MobileMenuButton } from "./MobileMenuButton";
import { getNavigation } from "@/helpers/getNavigation";
import Image from "next/image";

export const Left = async () => {
    const navigation = await getNavigation();

    return (
        <div className={styles.headerLeft}>
            <MobileMenuButton />
            <Link href="/" className={styles.logo}>
                <Image
                    src="/images/icons/logo.png"
                    alt="Molla Logo"
                    width="105"
                    height="24"
                />
            </Link>
            <nav className={styles.mainNav}>
                <ul className={styles.menu}>
                    {navigation.map((item, index) => (
                        <li key={index} className={styles.linksWrapper}>
                            {item.link ? (
                                <Link
                                    href={item.link}
                                    className={styles.mainLink}
                                >
                                    {item.title} <IoIosArrowDown />
                                </Link>
                            ) : (
                                <div className={styles.mainLink}>
                                    {item.title} <IoIosArrowDown />
                                </div>
                            )}
                            <ul className={styles.sublinks}>
                                {item.sublinks.map((sublink, index) => (
                                    <li key={index}>
                                        <Link href={sublink.link}>
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
