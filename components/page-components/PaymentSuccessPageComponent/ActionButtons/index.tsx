import { LuTruck } from "react-icons/lu";
import styles from "./styles.module.scss";

export const ActionButtons = () => {
    return (
        <div className={styles.actionButtons}>
            <button className={styles.primaryButton}>Continue Shopping</button>
            <button className={`${styles.outlineButton} ${styles.gray}`}>
                Track Order
            </button>
        </div>
    );
};
