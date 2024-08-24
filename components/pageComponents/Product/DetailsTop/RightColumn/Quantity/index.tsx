import styles from "./styles.module.scss";

export const ProductDetailsTopRightColumnQuantity = () => {
    return (
        <div className={styles.detailsFilter}>
            <label htmlFor="qty">Qty:</label>
            <div className={styles.quantityFilter}>
                <input
                    type="number"
                    id="qty"
                    className={styles.input}
                    value="1"
                    min="1"
                    max="10"
                    step="1"
                    data-decimals="0"
                    required
                />
            </div>
        </div>
    );
};
