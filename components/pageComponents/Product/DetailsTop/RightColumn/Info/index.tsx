import { getRating } from "@/helpers/getRating";
import styles from "./styles.module.scss";
import Link from "next/link";

export const ProductDetailsTopRightColumnInfo = () => {
    return (
        <>
            <h1 className={styles.title}>
                Dark yellow lace cut out swing dress
            </h1>
            <div className={styles.ratingsContainer}>
                {getRating(4)}
                <Link
                    className={`link-dark ${styles.ratingsText}`}
                    href="#product-review-link"
                >
                    ( 2 Reviews )
                </Link>
            </div>
            <div className={styles.price}>$84.00</div>
            <div className={styles.description}>
                <p>
                    Sed egestas, ante et vulputate volutpat, eros pede semper
                    est, vitae luctus metus libero eu augue. Morbi purus libero,
                    faucibus adipiscing. Sed lectus.
                </p>
            </div>
        </>
    );
};
