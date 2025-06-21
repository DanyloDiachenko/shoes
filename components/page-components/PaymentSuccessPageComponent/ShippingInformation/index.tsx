import { LuTruck } from "react-icons/lu";
import styles from "./styles.module.scss";
import { ShippingInformationProps } from "./shippingInformation.props";

export const ShippingInformation = ({
    shippingAddress,
    userFirstName,
    userLastName,
    shippingType,
}: ShippingInformationProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>
                    <LuTruck size={22} />
                    Shipping Information
                </h2>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.shippingInfo}>
                    <div className={styles.address}>
                        <p className={styles.name}>{userFirstName} {userLastName}</p>
                        <p className={styles.addressLine}>123 Main Street</p>
                        <p className={styles.addressLine}>New York, NY 10001</p>
                        <p className={styles.addressLine}>United States</p>
                    </div>
                    <div className={styles.deliveryInfo}>
                        <p className={styles.deliveryText}>
                            Estimated delivery:{" "}
                            <span className={styles.highlight}>
                                3-5 business days
                            </span>
                        </p>
                        <p className={styles.deliveryText}>
                            Tracking number will be sent via email
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
