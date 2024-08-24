import styles from "./styles.module.scss";

export const ProductDetailsTopRightColumnColors = () => {
    return (
        <div className={styles.detailsFilters}>
            <label>Color:</label>
            <div className={styles.colors}>
                <a href="#" className={styles.active}>
                    <img
                        src="/images/banners/product-details.png"
                        alt="product desc"
                    />
                </a>
                <a href="#">
                    <img
                        src="/images/banners/product-details.png"
                        alt="product desc"
                    />
                </a>
            </div>
        </div>
    );
};
