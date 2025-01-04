import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { getProductRating } from "@/helpers/getProductRating";
import { FaRegHeart } from "react-icons/fa";
import { LiaBinocularsSolid, LiaCartPlusSolid } from "react-icons/lia";
import { FaArrowRightLong } from "react-icons/fa6";

export const TopSellingProducts = () => {
    return (
        <div className={`${styles.topSellingProducts} container`}>
            <div className={styles.heading}>
                <h2 className={styles.title}>Top Selling Products</h2>
                <ul className={styles.nav} role="tablist">
                    <li className={styles.navItem}>
                        <Link
                            className={`${styles.navLink} ${styles.active}`}
                            id="top-all-link"
                            href="#top-all-tab"
                            role="tab"
                            aria-controls="top-all-tab"
                            aria-selected={true}
                        >
                            All
                        </Link>
                    </li>
                    <li className={styles.navItem}>
                        <a
                            className={styles.navLink}
                            id="top-women-link"
                            href="#top-women-tab"
                            role="tab"
                            aria-controls="top-women-tab"
                            aria-selected="false"
                        >
                            Women's
                        </a>
                    </li>
                    <li className={styles.navItem}>
                        <a
                            className={styles.navLink}
                            id="top-men-link"
                            href="#top-men-tab"
                            role="tab"
                            aria-controls="top-men-tab"
                            aria-selected="false"
                        >
                            Men's
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.tabContent}>
                <div
                    className={styles.tabPane}
                    id="top-all-tab"
                    role="tabpanel"
                    aria-labelledby="top-all-link"
                >
                    <div className={`${styles.row} row`}>
                        <div className={styles.column}>
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.moreContainer}>
                <Link href="/products">
                    <Button colorType="btnOutlinePrimary2">
                        <span>View more products</span>
                        <FaArrowRightLong />
                    </Button>
                </Link>
            </div>
        </div>
    );
};
