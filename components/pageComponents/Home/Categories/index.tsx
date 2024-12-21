import Link from "next/link";
import styles from "./styles.module.scss";

export const Categories = () => {
    return (
        <div className={`${styles.categories} container`}>
            <div className={`${styles.row} row`}>
                <div className={styles.column}>
                    <div className={styles.banner}>
                        <Link href="#">
                            <img
                                src="/images/banners/category-women.png"
                                alt="Banner"
                            />
                        </Link>
                        <div className={styles.bannerContent}>
                            <h3 className={styles.bannerTitle}>Women's</h3>
                            <h4 className={styles.bannerSubtitle}>
                                125 Products
                            </h4>
                            <Link
                                href="category.html"
                                className={styles.bannerLink}
                            >
                                SHOP NOW
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
