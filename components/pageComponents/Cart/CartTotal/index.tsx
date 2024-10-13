"use client";

import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";
import { RxUpdate } from "react-icons/rx";
import { CartTotalProps } from "./cartTotal.props";
import { ShippingType } from "@/types/shipping.type";
import { useState } from "react";
import { setCookie } from "@/helpers/setCookie";
import { Shipping } from "./Shipping";
import Link from "next/link";
import { shippings } from "@/data/shippings";

export const CartTotal = ({
    currency,
    cartProducts,
    cookieProducts,
}: CartTotalProps) => {
    let subtotal = 0;

    const [shippingType, setShippingType] = useState<ShippingType>("free");

    const onShippingTypeChange = (shipping: ShippingType) => {
        setShippingType(shipping);
        setCookie("shippingType", shipping);
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

    const getShippingPrice = () => {
        if (shippingType === "free") {
            return 0;
        }

        const currentShippingType = shippings.find(
            (shipping) => shipping.value === shippingType
        );

        if (currency == "uah") {
            return currentShippingType?.priceUah || 0;
        }

        return currentShippingType?.priceEur || 0;
    };

    const total = subtotal + getShippingPrice();

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
                        <Shipping
                            shippingType={shippingType}
                            onShippingTypeChange={onShippingTypeChange}
                            shippings={shippings}
                            currency={currency}
                        />
                        <tr className={styles.summaryShippingEstimate}>
                            <td>
                                Delivery to "Your Country"
                                <br />{" "}
                                <Link href="dashboard.html">
                                    Change address
                                </Link>
                            </td>
                            <td>&nbsp;</td>
                        </tr>

                        <tr className={styles.summaryTotal}>
                            <td>Total:</td>
                            <td>
                                {currency === "uah" ? "₴" : "€"}
                                {total.toFixed(2)}
                            </td>
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
