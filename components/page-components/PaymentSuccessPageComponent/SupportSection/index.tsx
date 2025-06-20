import { LuMail } from "react-icons/lu";
import styles from "./styles.module.scss";

export const SupportSection = () => {
    return (
        <div className={styles.supportSection}>
            <h3 className={styles.supportTitle}>Need Help?</h3>
            <p className={styles.supportText}>
                If you have any questions about your order, please don't
                hesitate to contact us.
            </p>
            <div className={styles.supportLinks}>
                <a href="#">Contact Support</a>
                <span className={styles.separator}>|</span>
                <a href="#">Return Policy</a>
                <span className={styles.separator}>|</span>
                <a href="#">FAQ</a>
            </div>
        </div>
    );
};
