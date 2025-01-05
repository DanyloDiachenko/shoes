import { LiaBinocularsSolid, LiaCartPlusSolid } from "react-icons/lia";
import styles from "./styles.module.scss";
import Link from "next/link";
import { getProductRating } from "@/helpers/getProductRating";
import { FaRegHeart } from "react-icons/fa";

export const Product = () => {
    return (
        <div className={styles.product}>
            <figure className={styles.media}>
                <span className={`${styles.label} ${styles.labelPrimary}`}>
                    Sale
                </span>
                <span className={`${styles.label} ${styles.labelSale}`}>
                    30% off
                </span>
                <Link href="product.html" className={styles.productLink}>
                    <img
                        src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                        alt="Product image"
                        className="product-image"
                    />
                </Link>
                <div className={styles.actionVertical}>
                    <Link href={`/products/`}>
                        <FaRegHeart />
                        <span className="sr-only">add to wishlist</span>
                    </Link>
                </div>
            </figure>
            <div className={styles.body}>
                <div className={styles.category}>
                    <Link href="#">Men’s</Link>, <Link href="#">Boots</Link>
                </div>
                <h3 className={styles.title}>
                    <Link href="product.html">
                        The North Face Back-To-Berkeley Remtlz Mesh
                    </Link>
                </h3>
                <div className={styles.price}>
                    {true ? (
                        <>
                            <span className={styles.newPrice}>Now $50.00</span>
                            <span className={styles.oldPrice}>$84.00</span>
                        </>
                    ) : (
                        <span className={styles.outPrice}>$54.99</span>
                    )}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.ratingsContainer}>
                    {getProductRating(4)}
                    <span className={styles.ratingsText}>( 4 Reviews )</span>
                </div>

                <div className={styles.productNav}>
                    <Link
                        href="#"
                        className={styles.color}
                        style={{ background: "#5f554b" }}
                    >
                        <span className="sr-only">Color name</span>
                    </Link>
                </div>
                <div className={styles.actions}>
                    <Link href="#" className={styles.product}>
                        <LiaCartPlusSolid />
                        <span>add to cart</span>
                    </Link>
                    <Link
                        href="popup/quickView.html"
                        className={styles.product}
                    >
                        <LiaBinocularsSolid />
                        <span>quick view</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
