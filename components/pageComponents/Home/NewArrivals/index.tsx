import { Slider } from "./Slider";
import styles from "./styles.module.scss";
import Link from "next/link";

export const NewArrivals = () => {
    return (
        <div className={styles.newArrivals}>
            <div className="container">
                <div className={styles.heading}>
                    <h2 className={styles.title}>New Arrivals</h2>
                    <ul className={styles.nav} role="tablist">
                        <li className={styles.navItem}>
                            <Link
                                className={`${styles.navLink} ${styles.active}`}
                                id="new-all-link"
                                href="#new-all-tab"
                                role="tab"
                                aria-controls="new-all-tab"
                                aria-selected="true"
                            >
                                All
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                className={styles.navLink}
                                id="new-women-link"
                                href="#new-women-tab"
                                role="tab"
                                aria-controls="new-women-tab"
                                aria-selected="false"
                            >
                                Women's
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                className={styles.navLink}
                                id="new-men-link"
                                href="#new-men-tab"
                                role="tab"
                                aria-controls="new-men-tab"
                                aria-selected="false"
                            >
                                Men's
                            </Link>
                        </li>
                    </ul>
                </div>
                <Slider />
            </div>
        </div>
    );
};
