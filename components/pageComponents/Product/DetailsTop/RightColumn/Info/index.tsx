import styles from "./styles.module.scss";
import Link from "next/link";
import { InfoProps } from "./info.props";
import { getCurrency } from "@/helpers/getCurrency";
import { getProductPrice } from "@/helpers/getProductPrice";
import { getProductRating } from "@/helpers/getProductRating";

export const Info = ({ product }: InfoProps) => {
    const currency = getCurrency();

    return (
        <>
            <h1 className={styles.title}>{product.title}</h1>
            <div className={styles.ratingsContainer}>
                {getProductRating(product.rating || 0)}
                <Link
                    className={`link-dark ${styles.ratingsText}`}
                    href="#product-review-link"
                >
                    ( {product.reviews.length} Reviews )
                </Link>
            </div>
            <div className={styles.price}>
                {getProductPrice(product.priceUah, product.priceEur, currency)}
            </div>
            <div className={styles.description}>
                <p>{product.description}</p>
            </div>
        </>
    );
};
