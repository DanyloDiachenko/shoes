import Link from "next/link";
import styles from "./styles.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { getProductRating } from "@/helpers/getProductRating";
import { LiaBinocularsSolid, LiaCartPlusSolid } from "react-icons/lia";
import { ProductProps } from "./product.props";
import { getProductPrice } from "@/helpers/getProductPrice";

export const Product = ({
    id,
    title,
    mainCategory,
    mainImage,
    categories,
    priceEur,
    priceUah,
    priceWithDiscountEur,
    priceWithDiscountUah,
    reviews,
    color,
    rating,
    currency,
}: ProductProps) => {
    return (
        <div className={styles.product}>
            <figure className={styles.productMedia}>
                <span className={styles.productLabel}>
                    {mainCategory.title}
                </span>
                {priceWithDiscountEur && priceWithDiscountUah ? (
                    <span className={`${styles.label} ${styles.labelSale}`}>
                        {currency === "uah"
                            ? `${
                                  100 -
                                  Math.round(
                                      (priceWithDiscountUah * 100) / priceUah
                                  )
                              }% off`
                            : `${
                                  100 -
                                  Math.round(
                                      (priceWithDiscountEur * 100) / priceEur
                                  )
                              }% off`}
                    </span>
                ) : (
                    ""
                )}
                <Link href={`/products/${id}`}>
                    <img
                        src={mainImage}
                        alt="Product image"
                        className={styles.productImage}
                    />
                </Link>
                <div className={styles.actionVertical}>
                    <Link href={`/products/${id}`}>
                        <FaRegHeart />
                        <span className="sr-only">add to wishlist</span>
                    </Link>
                </div>
            </figure>
            <div className={styles.productBody}>
                <div className={styles.productCategories}>
                    {categories.map((category) => (
                        <>
                            <Link
                                key={category.id}
                                href={`/products?categories=${category.slug}`}
                            >
                                {category.title}
                            </Link>
                            {categories.length > 1 && ", "}
                        </>
                    ))}
                </div>
                <h3 className={styles.productTitle}>
                    <Link href={`/products/${id}`}>{title}</Link>
                </h3>
                <div className={styles.productPrice}>
                    {getProductPrice(
                        priceUah,
                        priceEur,
                        priceWithDiscountUah,
                        priceWithDiscountEur,
                        currency
                    )}
                </div>
            </div>
            <div className={styles.productFooter}>
                <div className={styles.ratingsContainer}>
                    <div className={styles.ratings}>
                        {getProductRating(rating)}
                    </div>
                    <span className={styles.ratingsText}>
                        ( {reviews.length} Reviews )
                    </span>
                </div>
                <div className={styles.productNav}>
                    <Link
                        href="#"
                        style={{
                            background: color.hexCode,
                        }}
                    >
                        <span className="sr-only">{color.title}</span>
                    </Link>
                </div>
                <div className={styles.productAction}>
                    <Link
                        href={`/products/${id}`}
                        className={styles.addToCart}
                        title="Add to cart"
                    >
                        <LiaCartPlusSolid />
                        <span className="sr-only">add to cart</span>
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
    );
};
