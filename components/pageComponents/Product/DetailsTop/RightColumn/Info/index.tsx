import { getRating } from "@/helpers/getRating";
import styles from "./styles.module.scss";
import Link from "next/link";
import { InfoProps } from "./info.props";
import { getServerCookie } from "@/helpers/getServerCookie";
import { CurrencyType } from "@/types/currency.type";

export const Info = ({ product }: InfoProps) => {
    const currency = (getServerCookie("currency") || "uah") as CurrencyType;

    console.log(product.priceUah);

    return (
        <>
            <h1 className={styles.title}>{product.title}</h1>
            <div className={styles.ratingsContainer}>
                {getRating(product.rating || 0)}
                <Link
                    className={`link-dark ${styles.ratingsText}`}
                    href="#product-review-link"
                >
                    ( {product.reviews.length} Reviews )
                </Link>
            </div>
            <div className={styles.price}>
                {currency === "uah"
                    ? `₴${product.priceUah.toFixed(2)}`
                    : `€${product.priceEur.toFixed(2)}`}
            </div>
            <div className={styles.description}>
                <p>{product.description}</p>
            </div>
        </>
    );
};
