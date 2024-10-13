import { ShippingProps } from "./shipping.props";
import styles from "./styles.module.scss";

export const Shipping = ({
    shippingType,
    onShippingTypeChange,
}: ShippingProps) => {
    return (
        <>
            <tr className={styles.summaryShipping}>
                <td className={styles.td}>Shipping:</td>
                <td className={styles.td}>&nbsp;</td>
            </tr>
            <tr className={styles.summaryShippingRow}>
                <td className={styles.td}>
                    <div className={styles.customControl}>
                        <input
                            type="radio"
                            id="free-shipping"
                            name="shipping"
                            className={styles.customControlInput}
                            checked={shippingType === "free"}
                            onChange={() => onShippingTypeChange("free")}
                        />
                        <label
                            className={styles.customControlLabel}
                            htmlFor="free-shipping"
                        >
                            Free Shipping
                        </label>
                    </div>
                </td>
                <td className={styles.td}>$0.00</td>
            </tr>

            <tr className={styles.summaryShippingRow}>
                <td className={styles.td}>
                    <div className={styles.customControl}>
                        <input
                            type="radio"
                            id="standart-shipping"
                            name="shipping"
                            className={styles.customControlInput}
                            checked={shippingType === "standart"}
                            onChange={() => onShippingTypeChange("standart")}
                        />
                        <label
                            className={styles.customControlLabel}
                            htmlFor="standart-shipping"
                        >
                            Standart:
                        </label>
                    </div>
                </td>
                <td className={styles.td}>$10.00</td>
            </tr>

            <tr className={styles.summaryShippingRow}>
                <td className={styles.td}>
                    <div className={styles.customControl}>
                        <input
                            type="radio"
                            id="express-shipping"
                            name="shipping"
                            className={styles.customControlInput}
                            checked={shippingType === "express"}
                            onChange={() => onShippingTypeChange("express")}
                        />
                        <label
                            className={styles.customControlLabel}
                            htmlFor="express-shipping"
                        >
                            Express:
                        </label>
                    </div>
                </td>
                <td className={styles.td}>$20.00</td>
            </tr>
        </>
    );
};
