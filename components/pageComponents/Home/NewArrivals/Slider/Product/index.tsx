import { LiaBinocularsSolid, LiaCartPlusSolid } from "react-icons/lia";
import styles from "./styles.module.scss";
import Link from "next/link";
import { getProductRating } from "@/helpers/getProductRating";
import { FaRegHeart } from "react-icons/fa";
import { ProductProps } from "./product.props";

export const Product = ({
    id,
    title,
    priceEur,
    priceUah,
    priceWithDiscountEur,
    priceWithDiscountUah,
    mainImage,
    mainCategory,
    categories,
    reviews,
    rating,
    color,
}: ProductProps) => {
    return (
        <div className={styles.product}>
            <figure className={styles.media}>
                <span className={`${styles.label} ${styles.labelPrimary}`}>
                    {mainCategory.title}
                </span>
                <span className={`${styles.label} ${styles.labelSale}`}>
                    30% off
                </span>
                <Link href="product.html" className={styles.productLink}>
                    <img
                        src={mainImage}
                        alt="Product image"
                        className="product-image"
                    />
                </Link>
                <div className={styles.actionVertical}>
                    <Link href={`/products/${id}`}>
                        <FaRegHeart />
                        <span className="sr-only">add to wishlist</span>
                    </Link>
                </div>
            </figure>
            <div className={styles.body}>
                <div className={styles.category}>
                    {categories.map((category, index) => (
                        <>
                            <Link
                                key={index}
                                href={`/products/${category.slug}`}
                            >
                                {category.title}
                            </Link>
                            {index < categories.length - 1 && ", "}
                        </>
                    ))}
                </div>
                <h3 className={styles.title}>
                    <Link
                        href={`/products/${id}`}
                        className={styles.productLink}
                    >
                        {title}
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
                    {getProductRating(rating)}
                    <span className={styles.ratingsText}>
                        ( {reviews.length} Reviews )
                    </span>
                </div>

                <div className={styles.productNav}>
                    <Link
                        href="#"
                        className={styles.color}
                        style={{ background: color.hexCode }}
                    >
                        <span className="sr-only">{color.title}</span>
                    </Link>
                </div>
                <div className={styles.actions}>
                    <Link href={`/products/${id}`} className={styles.product}>
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
