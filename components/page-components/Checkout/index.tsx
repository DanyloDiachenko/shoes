"use client";

import { useState } from "react";
import { Aside } from "./Aside";
import { CheckoutProps } from "./checkout.props";
import { Form } from "./Form";
import { toast } from "react-toastify";
import { Product } from "@/interfaces/entities/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { shippings } from "@/data/shippings";
import { createOrder } from "@/api/orders";
import { setCookie } from "@/helpers/setCookie";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";

export const CheckoutPageComponent = ({
    user,
    cookieProducts,
    products,
    currency,
    shippingType,
}: CheckoutProps) => {
    const dispatch = useDispatch();
    const router = useRouter();

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const [orderNotes, setOrderNotes] = useState("");

    const getProductPrice = (product: Product) => {
        const cookieProduct = cookieProducts.find(
            (cookieProduct) => cookieProduct.id === product.id
        ) as CookieProduct;

        const productPriceUah =
            product.priceWithDiscountUah !== 0
                ? product.priceWithDiscountUah
                : product.priceUah;
        const productPriceEur =
            product.priceWithDiscountEur !== 0
                ? product.priceWithDiscountEur
                : product.priceEur;

        return currency === "uah"
            ? productPriceUah * cookieProduct.quantity
            : productPriceEur * cookieProduct.quantity;
    };

    const getSubtotalPrice = () => {
        return products.reduce((acc, product) => {
            return acc + getProductPrice(product);
        }, 0);
    };

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

    const getTotalPrice = () => {
        return getSubtotalPrice() + getShippingPrice();
    };

    const onPaymentClick = async () => {
        if (!user.firstName) {
            toast.error("Please fill your name");
            return;
        }
        if (!user.lastName) {
            toast.error("Please fill your surname");
            return;
        }
        if (!user.shippingAddress?.country) {
            toast.error("Please fill your country");
            return;
        }
        if (!user.shippingAddress?.city) {
            toast.error("Please fill your City");
            return;
        }
        if (!user.shippingAddress?.street) {
            toast.error("Please fill your street");
            return;
        }
        if (!user.shippingAddress?.homeNumber) {
            toast.error("Please fill your home number");
            return;
        }
        if (!user.shippingAddress?.postIndex) {
            toast.error("Please fill your post index");
            return;
        }
        if (!user.phone) {
            toast.error("Please fill your phone number");
            return;
        }
        if (
            shippingType !== "free" &&
            shippingType !== "express" &&
            shippingType !== "standart"
        ) {
            toast.error("Please choose correct shipping type");
            return;
        }
    };

    const onPaymentSuccess = async () => {
        const paymentData = {
            cart: cookieProducts.map((product) => ({
                productId: product.id,
                quantity: product.quantity,
                size: product.size,
            })),
            orderNotes,
            shippingType,
            amount: getTotalPrice(),
        };
        console.log(paymentData);

        const res = await createOrder(paymentData);

        if (res.id) {
            setCookie("cart", "");
            toogleLocalStorageHandler();
            toast.success("Order created successfuly!");
            router.push("/payment-success");

            const successfulPaymentData = {
                orderNotes,
                shippingType,
                orderId: res.id
            };
            const successfulPaymentDataEncoded = encodeURIComponent(
                JSON.stringify(successfulPaymentData)
            );
            router.push(
                `/payment-success?data=${successfulPaymentDataEncoded}&`
            );
        }
    };

    return (
        <div className="page-content">
            <div className="container">
                <form action="#">
                    <div className="row">
                        <Form
                            user={user}
                            orderNotes={orderNotes}
                            setOrerNotes={setOrderNotes}
                        />
                        <Aside
                            onPaymentSuccess={() => onPaymentSuccess()}
                            onPaymentClick={onPaymentClick}
                            products={products}
                            currency={currency}
                            shippingType={shippingType}
                            subtotal={getSubtotalPrice()}
                            getProductPrice={getProductPrice}
                            shippingPrice={getShippingPrice()}
                            total={getTotalPrice()}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
