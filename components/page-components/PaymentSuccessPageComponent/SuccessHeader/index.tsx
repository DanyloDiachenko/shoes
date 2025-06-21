import { LuCheck } from "react-icons/lu";
import styles from "./styles.module.scss";
import { SuccessHeaderProps } from "./SuccessHeader.props";
import Link from "next/link";

export const SuccessHeader = ({ orderId }: SuccessHeaderProps) => {
    return (
        <div className={styles.successSection}>
            <div className={styles.successIcon}>
                <LuCheck size={36} />
            </div>
            <h1 className={styles.title}>Payment Successful!</h1>
            <p className={styles.subtitle}>Thank you for your purchase</p>
            <p className={styles.orderNumber}>
                Order <Link href="/dashboard/orders">#{orderId}</Link>
            </p>
        </div>
    );
};
