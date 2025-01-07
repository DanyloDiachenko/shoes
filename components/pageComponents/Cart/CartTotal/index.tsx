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
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { DeliveryTo } from "./DeliveryTo";

export const CartTotal = ({
    currency,
    cartProducts,
    cookieProducts,
    user,
}: CartTotalProps) => {
    const router = useRouter();

    const [shippingType, setShippingType] = useState<ShippingType>("free");

    let subtotal = 0;

    const onShippingTypeChange = (shipping: ShippingType) => {
        setShippingType(shipping);
        setCookie("shippingType", shipping);
    };

    for (let i = 0; i < cartProducts.length; i++) {
        for (let j = 0; j < cookieProducts.length; j++) {
            if (cartProducts[i].id === cookieProducts[j].id) {
                const pricePerProductUah =
                    cartProducts[j].priceWithDiscountUah !== 0
                        ? cartProducts[j].priceWithDiscountUah
                        : cartProducts[j].priceUah;

                const pricePerProductEur =
                    cartProducts[j].priceWithDiscountEur !== 0
                        ? cartProducts[j].priceWithDiscountEur
                        : cartProducts[j].priceEur;


                const pricePerProduct =
                    currency === "uah"
                        ? pricePerProductUah
                        : pricePerProductEur;

                subtotal += pricePerProduct * cookieProducts[j].quantity;
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

    const onProceedToCheckoutClick = () => {
        if (!user) {
            toast.error("Please login to proceed to checkout");

            return;
        }
        if (!cartProducts.length) {
            toast.error("Please add some products to cart");

            return;
        }

        router.push("/checkout");
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
                                {getCurrencyIcon(currency)}
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
                            <DeliveryTo user={user} />
                            <td>&nbsp;</td>
                        </tr>
                        <tr className={styles.summaryTotal}>
                            <td>Total:</td>
                            <td>
                                {getCurrencyIcon(currency)}
                                {total.toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <Button
                    colorType="btnOutlinePrimary2"
                    className={styles.buttonProceedToCheckout}
                    onClick={onProceedToCheckoutClick}
                >
                    PROCEED TO CHECKOUT
                </Button>
            </div>
            <Link href={"/products"}>
                <Button
                    colorType="btnOutlineDark2"
                    className={styles.buttonContinueShopping}
                    tabIndex={-1}
                >
                    <span>CONTINUE SHOPPING</span>
                    <RxUpdate />
                </Button>
            </Link>
        </aside>
    );
};
