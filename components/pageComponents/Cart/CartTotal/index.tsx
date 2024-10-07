"use client";

import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";
import { RxUpdate } from "react-icons/rx";
import { CartTotalProps } from "./cartTotal.props";
import { ShippingType } from "@/types/shipping.type";
import { useState } from "react";
import { setCookie } from "@/helpers/setCookie";

let subtotal = 0;

export const CartTotal = ({
    currency,
    cartProducts,
    cookieProducts,
}: CartTotalProps) => {
    const [shipping, setShipping] = useState<ShippingType>("free");

    const onShippingChange = (shipping: ShippingType) => {
        setShipping(shipping);
        setCookie("shipping", shipping);
    };

    for (let i = 0; i < cartProducts.length; i++) {
        for (let j = 0; j < cookieProducts.length; j++) {
            if (cartProducts[i].id === cookieProducts[j].id) {
                subtotal +=
                    currency === "uah"
                        ? cartProducts[j].priceUah * cookieProducts[j].quantity
                        : cartProducts[j].priceEur * cookieProducts[j].quantity;
            }
        }
    }

    return (
        <aside className={styles.column}>
            <div className={styles.summary}>
                <h3 className={styles.summaryTitle}>Cart Total</h3>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.summarySubtotal}>
                            <td>Subtotal:</td>
                            <td>
                                {currency === "uah" ? "₴" : "€"}
                                {subtotal.toFixed(2)}
                            </td>
                        </tr>
                        <tr className={styles.summaryShipping}>
                            <td>Shipping:</td>
                            <td>&nbsp;</td>
                        </tr>
                        <tr className={styles.summaryShippingRow}>
                            <td>
                                <div className={styles.customControl}>
                                    <input
                                        type="radio"
                                        id="free-shipping"
                                        name="shipping"
                                        className={styles.customControlInput}
                                        checked={shipping === "free"}
                                        onChange={() =>
                                            onShippingChange("free")
                                        }
                                    />
                                    <label
                                        className={styles.customControlLabel}
                                        htmlFor="free-shipping"
                                    >
                                        Free Shipping
                                    </label>
                                </div>
                            </td>
                            <td>$0.00</td>
                        </tr>

                        <tr className={styles.summaryShippingRow}>
                            <td>
                                <div className={styles.customControl}>
                                    <input
                                        type="radio"
                                        id="standart-shipping"
                                        name="shipping"
                                        className={styles.customControlInput}
                                        checked={shipping === "standart"}
                                        onChange={() =>
                                            onShippingChange("standart")
                                        }
                                    />
                                    <label
                                        className={styles.customControlLabel}
                                        htmlFor="standart-shipping"
                                    >
                                        Standart:
                                    </label>
                                </div>
                            </td>
                            <td>$10.00</td>
                        </tr>

                        <tr className={styles.summaryShippingRow}>
                            <td>
                                <div className={styles.customControl}>
                                    <input
                                        type="radio"
                                        id="express-shipping"
                                        name="shipping"
                                        className={styles.customControlInput}
                                        checked={shipping === "express"}
                                        onChange={() =>
                                            onShippingChange("express")
                                        }
                                    />
                                    <label
                                        className={styles.customControlLabel}
                                        htmlFor="express-shipping"
                                    >
                                        Express:
                                    </label>
                                </div>
                            </td>
                            <td>$20.00</td>
                        </tr>

                        <tr className={styles.summaryShippingEstimate}>
                            <td>
                                Estimate for Your Country
                                <br />{" "}
                                <a href="dashboard.html">Change address</a>
                            </td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr className={styles.summaryTotal}>
                            <td>Total:</td>
                            <td>$160.00</td>
                        </tr>
                    </tbody>
                </table>
                <Button
                    colorType="btnOutlinePrimary2"
                    className={styles.buttonProceedToCheckout}
                >
                    PROCEED TO CHECKOUT
                </Button>
            </div>
            <Button
                colorType="btnOutlineDark2"
                className={styles.buttonContinueShopping}
            >
                <span>CONTINUE SHOPPING</span>
                <RxUpdate />
            </Button>
        </aside>
    );
};
