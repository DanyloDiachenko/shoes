import styles from "./styles.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa";

export const Quantity = () => {
    return (
        <div className={styles.detailsFilter}>
            <label htmlFor="qty">Qty:</label>
            <div className={styles.quantityFilter}>
                <button className={styles.decrement} aria-label="Decrement">
                    <FaMinus />
                </button>
                <input
                    type="number"
                    id="qty"
                    className={styles.input}
                    defaultValue="1"
                    min="1"
                    max="10"
                    step="1"
                    data-decimals="0"
                    required
                />
                <button className={styles.increment} aria-label="Increment">
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};
