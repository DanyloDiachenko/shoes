import Link from "next/link";
import styles from "./styles.module.scss";
import { IoIosArrowForward } from "react-icons/io";
import { BreadcrumbsProps } from "./breadcrumbs.props";

export const Breadcrumbs = ({ breadcrumbs }: BreadcrumbsProps) => {
    return (
        <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
            <div className={`container ${styles.container}`}>
                <ol className={styles.breadcrumb}>
                    {breadcrumbs.map((link, index) => (
                        <span key={index}>
                            <li
                                className={`${styles.item} ${
                                    breadcrumbs.length === index + 1
                                        ? styles.active
                                        : ""
                                }`}
                                aria-current="page"
                            >
                                <Link href={link.link}>{link.title}</Link>
                            </li>
                            {breadcrumbs.length - 1 !== index && (
                                <IoIosArrowForward />
                            )}
                        </span>
                    ))}
                </ol>
            </div>
        </nav>
    );
};
