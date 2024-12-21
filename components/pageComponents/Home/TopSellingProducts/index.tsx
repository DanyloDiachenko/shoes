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
                            <div className={styles.product}>
                                <figure className={styles.productMedia}>
                                    <span className={styles.productLabel}>
                                        Sale
                                    </span>
                                    <span
                                        className={`${styles.productLabel} ${styles.sale}`}
                                    >
                                        30% off
                                    </span>
                                    <Link href={`/products/`}>
                                        <img
                                            src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                                            alt="Product image"
                                            className={styles.productImage}
                                        />
                                    </Link>
                                    <div className={styles.actionVertical}>
                                        <Link href={`/products/`}>
                                            <FaRegHeart />
                                            <span className="sr-only">
                                                add to wishlist
                                            </span>
                                        </Link>
                                    </div>
                                </figure>
                                <div className={styles.productBody}>
                                    <div className={styles.productCategories}>
                                        <Link href="#">Men’s</Link>,{" "}
                                        <Link href="#">Sneakers</Link>
                                    </div>
                                    <h3 className={styles.productTitle}>
                                        <Link href={`/products/${1}`}>
                                            ASICS Tiger Gel-Lyte MT
                                        </Link>
                                    </h3>
                                    {true ? (
                                        <div className={styles.productPrice}>
                                            <span className={styles.newPrice}>
                                                Now $77.99
                                            </span>
                                            <span className={styles.oldPrice}>
                                                $130.00
                                            </span>
                                        </div>
                                    ) : (
                                        <div className={styles.productPrice}>
                                            Now $77.99
                                        </div>
                                    )}
                                </div>
                                <div className={styles.productFooter}>
                                    <div className={styles.ratingsContainer}>
                                        <div className={styles.ratings}>
                                            {getProductRating(4)}
                                        </div>
                                        <span className={styles.ratingsText}>
                                            ( 4 Reviews )
                                        </span>
                                    </div>
                                    <div className={styles.productNav}>
                                        <Link
                                            href="#"
                                            style={{
                                                background: "#af5f23",
                                            }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </Link>
                                    </div>
                                    <div className={styles.productAction}>
                                        <Link
                                            href={`/products/1`}
                                            className={styles.addToCart}
                                            title="Add to cart"
                                        >
                                            <LiaCartPlusSolid />
                                            <span className="sr-only">
                                                add to cart
                                            </span>
                                        </Link>
                                        <Link
                                            href="#"
                                            className={styles.quickView}
                                            title="Quick view"
                                        >
                                            <LiaBinocularsSolid />
                                            <span className="sr-only"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
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
