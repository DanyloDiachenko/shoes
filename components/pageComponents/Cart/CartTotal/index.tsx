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

    const onProceedToCheckoutClick = () => {
        if (!user) {
            toast.error("Please login to proceed to checkout");

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
                            <td>
                                Delivery to:
                                <br />
                                {user?.firstName?.length &&
                                    `${user.firstName} `}
                                {user?.lastName?.length && `${user.lastName} `}
                                <br />
                                {user?.phone?.length && `${user.phone} `}
                                <br />
                                {user?.shippingAddress?.country &&
                                    `${user.shippingAddress.country}, `}
                                {user?.shippingAddress?.city &&
                                    `${user.shippingAddress.city}, `}
                                {user?.shippingAddress?.street &&
                                    `${user.shippingAddress.street}, `}{" "}
                                {user?.shippingAddress?.homeNumber &&
                                    `${user.shippingAddress.homeNumber}, `}
                                {user?.shippingAddress?.postIndex &&
                                    `${user.shippingAddress.postIndex}`}
                                <br />{" "}
                                <Link href="/dashboard/addresses">
                                    Change address
                                </Link>
                            </td>
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
