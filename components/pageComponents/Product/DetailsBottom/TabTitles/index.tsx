import styles from "./styles.module.scss";

export const ProductDetailsBottomTabTitles = () => {
    return (
        <ul className={styles.tabTitles} role="tablist">
            <li className={styles.navItem}>
                <a
                    className={`${styles.navLink} ${styles.active}`}
                    id="product-desc-link"
                    data-toggle="tab"
                    href="#product-desc-tab"
                    role="tab"
                    aria-controls="product-desc-tab"
                    aria-selected="true"
                >
                    Description
                </a>
            </li>
            <li className={styles.navItem}>
                <a
                    className={`${styles.navLink}`}
                    id="product-info-link"
                    href="#product-info-tab"
                    role="tab"
                    aria-controls="product-info-tab"
                    aria-selected="false"
                >
                    Additional information
                </a>
            </li>
            <li className={styles.navItem}>
                <a
                    className={`${styles.navLink}`}
                    id="product-shipping-link"
                    href="#product-shipping-tab"
                    role="tab"
                    aria-controls="product-shipping-tab"
                    aria-selected="false"
                >
                    Shipping & Returns
                </a>
            </li>
            <li className={styles.navItem}>
                <a
                    className={`${styles.navLink}`}
                    id="product-review-link"
                    href="#product-review-tab"
                    role="tab"
                    aria-controls="product-review-tab"
                    aria-selected="false"
                >
                    Reviews (2)
                </a>
            </li>
        </ul>
    );
};
