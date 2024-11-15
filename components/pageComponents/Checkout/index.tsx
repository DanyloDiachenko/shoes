"use client";

import { useState } from "react";
import { Aside } from "./Aside";
import { CheckoutProps } from "./checkout.props";
import { Coupon } from "./Coupon";
import { Form } from "./Form";
import { Payment } from "@/types/payment.type";

export const CheckoutPageComponent = ({
    user,
    cookieProducts,
    products,
}: CheckoutProps) => {
    const [orderNotes, setOrderNotes] = useState("");
    const [paymentMethod, setPaymentMethod] = useState<Payment | null>(null);

    return (
        <div className="page-content">
            <div className="container">
                <Coupon />
                <form action="#">
                    <div className="row">
                        <Form
                            user={user}
                            orderNotes={orderNotes}
                            setOrerNotes={setOrderNotes}
                        />
                        <Aside
                            paymentMethod={paymentMethod}
                            setPaymentMethod={setPaymentMethod}
                            products={products}
                            cookieProducts={cookieProducts}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
