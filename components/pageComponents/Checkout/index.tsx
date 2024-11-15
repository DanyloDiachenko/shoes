"use client";

import { useState } from "react";
import { Aside } from "./Aside";
import { CheckoutProps } from "./checkout.props";
import { Coupon } from "./Coupon";
import { Form } from "./Form";

export const CheckoutPageComponent = ({ user }: CheckoutProps) => {
    const [orderNotes, setOrderNotes] = useState("");

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
                        <Aside />
                    </div>
                </form>
            </div>
        </div>
    );
};
