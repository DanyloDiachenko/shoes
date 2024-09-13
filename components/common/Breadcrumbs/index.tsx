import Link from "next/link";
import styles from "./styles.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { BreadcrumbsProps } from "./breadcrumbs.props";

export const Breadcrumbs = ({ links }: BreadcrumbsProps) => {
    return (
        <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
            <div className={`container ${styles.container}`}>
                <ol className={styles.breadcrumb}>
                    {links.map((link, index) => (
                        <span key={index}>
                            <li
                                className={`${styles.item} ${
                                    links.length === index ? styles.active : ""
                                }`}
                                aria-current="page"
                            >
                                <Link href={link.link}>{link.title}</Link>
                            </li>
                            {links.length - 1 !== index && (
                                <IoIosArrowForward />
                            )}
                        </span>
                    ))}
                </ol>
            </div>
        </nav>
    );
};
