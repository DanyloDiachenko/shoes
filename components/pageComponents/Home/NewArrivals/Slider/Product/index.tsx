import { LiaBinocularsSolid, LiaCartPlusSolid } from "react-icons/lia";
import styles from "./styles.module.scss";
import Link from "next/link";
import { getProductRating } from "@/helpers/getProductRating";
import { FaRegHeart } from "react-icons/fa";
import { ProductProps } from "./product.props";
import { getProductPrice } from "@/helpers/getProductPrice";
import Image from "next/image";

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
    currency,
}: ProductProps) => {
    return (
        <div className={styles.product}>
            <figure className={styles.media}>
                <span className={`${styles.label} ${styles.labelPrimary}`}>
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
                <Link href={`/products/${id}`} className={styles.productLink}>
                    <Image
                        src={mainImage}
                        alt="Product image"
                        sizes="100vw"
                        width={0}
                        height={0}
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
                        <span key={index}>
                            <Link href={`/products/${category.slug}`}>
                                {category.title}
                            </Link>
                            {index < categories.length - 1 && ", "}
                        </span>
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
                    {getProductPrice(
                        priceUah,
                        priceEur,
                        priceWithDiscountUah,
                        priceWithDiscountEur,
                        currency
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
                        href={`/products?color=${color.slug}`}
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
