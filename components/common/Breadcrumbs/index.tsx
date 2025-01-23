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
                        <li key={index} className={styles.item}>
                            <span
                                className={`${
                                    breadcrumbs.length === index + 1
                                        ? styles.active
                                        : ""
                                }`}
                                aria-current="page"
                            >
                                <Link href={link.link}>{link.title}</Link>
                            </span>
                            {breadcrumbs.length - 1 !== index && (
                                <IoIosArrowForward />
                            )}
                        </li>
                    ))}
                </ol>
            </div>
        </nav>
    );
};
