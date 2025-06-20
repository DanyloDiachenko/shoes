import { LuCheck } from "react-icons/lu";
import styles from "./styles.module.scss";

export const SuccessHeader = () => {
    return (
        <div className={styles.successSection}>
            <div className={styles.successIcon}>
                <LuCheck size={36} />
            </div>
            <h1 className={styles.title}>Payment Successful!</h1>
            <p className={styles.subtitle}>Thank you for your purchase</p>
            <p className={styles.orderNumber}>Order #MOL-2024-001234</p>
        </div>
    );
};
