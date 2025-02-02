"use client";

import { FormEvent, useState } from "react";
import { Aside } from "./Aside";
import { CheckoutProps } from "./checkout.props";
import { Form } from "./Form";
import { Payment } from "@/types/payment.type";
import { toast } from "react-toastify";
import { createOrder } from "@/app/api/orders";

export const CheckoutPageComponent = ({
    user,
    cookieProducts,
    products,
    currency,
    shippingType,
}: CheckoutProps) => {
    const [orderNotes, setOrderNotes] = useState("");
    const [paymentMethod, setPaymentMethod] = useState<Payment | null>(null);

    const onPlaceOrderClick = async (e: FormEvent) => {
        e.preventDefault();

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
        }
        if (!paymentMethod) {
            toast.error("Please choose payment method");
            return;
        }

        const body = {
            cart: cookieProducts.map((product) => ({
                productId: product.id,
                quantity: product.quantity,
            })),
            deliveryAddressId: user.shippingAddress.id,
            orderNotes,
            shippingType,
        };

        /* const res = await createOrder(body); */
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
                            onPlaceOrderClick={onPlaceOrderClick}
                            paymentMethod={paymentMethod}
                            setPaymentMethod={setPaymentMethod}
                            products={products}
                            cookieProducts={cookieProducts}
                            currency={currency}
                            shippingType={shippingType}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
