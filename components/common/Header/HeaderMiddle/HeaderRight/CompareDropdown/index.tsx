import Link from "next/link";
import styles from "./styles.module.scss";
import {
    IoIosGitCompare,
    IoMdClose,
    IoIosArrowRoundForward,
} from "react-icons/io";

export const CompareDropdown = () => {
    return (
        <div className={`${styles.dropdown}`}>
            <Link
                href="#"
                className={styles.dropdownToggle}
                role="button"
                title="Compare Products"
            >
                <IoIosGitCompare className={styles.compareIcon} />
            </Link>
            <div className={`${styles.dropdownMenu}`}>
                <ul className={styles.compareProducts}>
                    <li className={styles.compareProduct}>
                        <Link
                            href="#"
                            className={styles.btnRemove}
                            title="Remove Product"
                        >
                            <IoMdClose />
                        </Link>
                        <h4 className={styles.compareProductTitle}>
                            <Link href="#">Blue Night Dress</Link>
                        </h4>
                    </li>
                    <li className={styles.compareProduct}>
                        <Link
                            href="#"
                            className={styles.btnRemove}
                            title="Remove Product"
                        >
                            <IoMdClose />
                        </Link>
                        <h4 className={styles.compareProductTitle}>
                            <Link href="#">Blue Night Dress</Link>
                        </h4>
                    </li>
                </ul>
                <div className={styles.compareActions}>
                    <Link href="#" className={styles.actionLink}>
                        Clear All
                    </Link>
                    <Link href="#" className={`${styles.button}`}>
                        <span>Compare</span>
                        <IoIosArrowRoundForward />
                    </Link>
                </div>
            </div>
        </div>
    );
};
