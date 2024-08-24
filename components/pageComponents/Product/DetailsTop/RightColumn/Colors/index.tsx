import Link from "next/link";
import styles from "./styles.module.scss";

export const Colors = () => {
    return (
        <div className={styles.detailsFilters}>
            <label>Color:</label>
            <div className={styles.colors}>
                <Link href="#" className={styles.active}>
                    <img
                        src="/images/banners/product-details.png"
                        alt="product desc"
                    />
                </Link>
                <Link href="#">
                    <img
                        src="/images/banners/product-details.png"
                        alt="product desc"
                    />
                </Link>
            </div>
        </div>
    );
};
