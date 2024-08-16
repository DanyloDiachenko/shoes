import Link from "next/link";
import styles from "./styles.module.scss";
import { IoIosArrowForward } from "react-icons/io";

export const Breadcrumbs = () => {
    return (
        <nav aria-label="breadcrumb" className={styles.breadcrumbs}>
            <div className={`container ${styles.container}`}>
                <ol className={styles.breadcrumb}>
                    <li className={styles.item}>
                        <Link href="/">Home</Link>
                    </li>
                    <IoIosArrowForward />
                    <li className={styles.item}>
                        <Link href="#">Shop</Link>
                    </li>
                    <IoIosArrowForward />
                    <li
                        className={`${styles.item} ${styles.active}`}
                        aria-current="page"
                    >
                        <Link href="#">List</Link>
                    </li>
                </ol>
            </div>
        </nav>
    );
};
