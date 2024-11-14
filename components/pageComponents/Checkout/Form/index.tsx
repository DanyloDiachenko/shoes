"use client";

import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { Checkbox } from "@/components/UI/Checkbox";
import { Textarea } from "@/components/UI/Textarea";
import { FormProps } from "./form.props";
import { useState } from "react";

export const Form = ({ user }: FormProps) => {
    const [shippingToDifferentAddress, setShippingToDifferentAddress] =
        useState(false);

    return (
        <div className={styles.column}>
            <h2 className={styles.title}>Shipping Details</h2>
            <div className="row">
                <div className={styles.col}>
                    <label>First Name *</label>
                    <Input
                        type="text"
                        disabled={!shippingToDifferentAddress}
                        value={user.firstName || ""}
                    />
                </div>
                <div className={styles.col}>
                    <label>Last Name *</label>
                    <Input
                        type="text"
                        disabled={!shippingToDifferentAddress}
                        value={user.lastName || ""}
                    />
                </div>
            </div>
            <label>Country *</label>
            <Input
                type="text"
                disabled={!shippingToDifferentAddress}
                value={user.shippingAddress?.country || ""}
            />

            <div className="row">
                <div className={styles.col}>
                    <label>Town / City *</label>
                    <Input
                        type="text"
                        disabled={!shippingToDifferentAddress}
                        value={user.shippingAddress?.city || ""}
                    />
                </div>
                <div className={styles.col}>
                    <label>Street *</label>
                    <Input
                        type="text"
                        disabled={!shippingToDifferentAddress}
                        value={user.shippingAddress?.street || ""}
                    />
                </div>
            </div>
            <div className="row">
                <div className={styles.col}>
                    <label>Home number *</label>
                    <Input
                        type="text"
                        disabled={!shippingToDifferentAddress}
                        value={user.shippingAddress?.homeNumber || ""}
                    />
                </div>
                <div className={styles.col}>
                    <label>Postcode / ZIP *</label>
                    <Input
                        type="text"
                        disabled={!shippingToDifferentAddress}
                        value={user.shippingAddress?.postIndex || ""}
                    />
                </div>
            </div>
            <label>Phone *</label>
            <Input
                type="phone"
                disabled={!shippingToDifferentAddress}
                value={user.phone || ""}
            />
            <label>Email address *</label>
            <Input
                type="email"
                disabled={!shippingToDifferentAddress}
                value={user.email || ""}
            />
            <Checkbox
                title="Ship to a different address?"
                id="checkout-diff-address"
                className={styles.checkbox}
                onChange={() =>
                    setShippingToDifferentAddress(!shippingToDifferentAddress)
                }
                value={String(shippingToDifferentAddress)}
            />
            <label className={styles.textareaLabel}>
                Order notes (optional)
            </label>
            <Textarea
                cols={30}
                rows={4}
                placeholder="Notes about your order, e.g. special notes for delivery"
                className={styles.textarea}
            />
        </div>
    );
};
