import { useEffect } from "react";
import { ShippingProps } from "./shipping.props";
import styles from "./styles.module.scss";

export const Shipping = ({
    shippingType,
    onShippingTypeChange,
    shippings,
    currency,
    subtotal,
}: ShippingProps) => {
    const isFreeShippingAvailable =
        currency === "uah" ? subtotal >= 5000 : subtotal >= 100;

    useEffect(() => {
        if (currency === "uah") {
            if (subtotal < 5000 && shippingType === "free") {
                onShippingTypeChange("standart");
            }
        } else {
            if (subtotal < 100 && shippingType === "free") {
                onShippingTypeChange("standart");
            }
        }
    }, [subtotal]);

    return (
        <>
            <tr className={styles.summaryShipping}>
                <td className={styles.td}>Shipping:</td>
                <td className={styles.td}>&nbsp;</td>
            </tr>
            {shippings.map((shipping, index) => (
                <tr
                    className={`${styles.summaryShippingRow} ${
                        shipping.value === "free" && !isFreeShippingAvailable
                            ? styles.freeShippingDisabled
                            : ""
                    }`}
                    key={index}
                >
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
                                disabled={
                                    shipping.value === "free" &&
                                    !isFreeShippingAvailable
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
