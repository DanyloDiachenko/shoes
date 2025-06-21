import { LuTruck } from "react-icons/lu";
import styles from "./styles.module.scss";
import { ShippingInformationProps } from "./shippingInformation.props";
import { shippings } from "@/data/shippings";

export const ShippingInformation = ({
    shippingAddress,
    userFirstName,
    userLastName,
    shippingType,
    orderNotes,
}: ShippingInformationProps) => {
    const shipping = shippings.find(
        (shipping) => shipping.value === shippingType
    );

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
                        <p className={styles.name}>
                            {userFirstName} {userLastName}
                        </p>
                        <p className={styles.addressLine}>
                            {shippingAddress.homeNumber}{" "}
                            {shippingAddress.street} str.
                        </p>
                        <p className={styles.addressLine}>
                            {shippingAddress.city}, {shippingAddress.postIndex}
                        </p>
                        <p className={styles.addressLine}>
                            {shippingAddress.country}
                        </p>
                    </div>
                    <div className={styles.deliveryInfo}>
                        <p className={styles.deliveryText}>
                            Delivery:{" "}
                            <span className={styles.highlight}>
                                {shipping?.title}
                            </span>
                        </p>
                        {orderNotes && (
                            <p className={styles.deliveryText}>
                                Notes: {orderNotes}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
