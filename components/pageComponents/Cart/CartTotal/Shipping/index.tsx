import { ShippingProps } from "./shipping.props";
import styles from "./styles.module.scss";

export const Shipping = ({
    shippingType,
    onShippingTypeChange,
    shippings,
    currency,
}: ShippingProps) => {
    return (
        <>
            <tr className={styles.summaryShipping}>
                <td className={styles.td}>Shipping:</td>
                <td className={styles.td}>&nbsp;</td>
            </tr>
            {shippings.map((shipping, index) => (
                <tr className={styles.summaryShippingRow} key={index}>
                    <td className={styles.td}>
                        <div className={styles.customControl}>
                            <input
                                type="radio"
                                id={shipping.value}
                                name="shipping"
                                className={styles.customControlInput}
                                checked={shippingType === shipping.value}
                                onChange={() =>
                                    onShippingTypeChange(shipping.value)
                                }
                            />
                            <label
                                className={styles.customControlLabel}
                                htmlFor={shipping.value}
                            >
                                {shipping.title}
                            </label>
                        </div>
                    </td>
                    <td className={styles.td}>
                        {currency === "uah"
                            ? `₴${shipping.priceUah.toFixed(2)}`
                            : `€${shipping.priceEur.toFixed(2)}`}
                    </td>
                </tr>
            ))}
        </>
    );
};
