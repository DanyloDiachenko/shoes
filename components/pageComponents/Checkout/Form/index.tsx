"use client";

import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { Checkbox } from "@/components/UI/Checkbox";
import { Textarea } from "@/components/UI/Textarea";
import { FormProps } from "./form.props";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Popup } from "@/types/popup.type";
import { setOpenedPopup } from "@/store/slices/openedPopup";

export const Form = ({ user }: FormProps) => {
    const dispatch = useDispatch();

    const setOpenedPopupHandler = () => {
        dispatch(
            setOpenedPopup(
                user.shippingAddress
                    ? "updateShippingAddress"
                    : "createShippingAddress"
            )
        );
    };

    return (
        <div className={styles.column}>
            <h2 className={styles.title}>Shipping Details</h2>
            <div className="row">
                <div className={styles.col}>
                    <label>First Name *</label>
                    <Input type="text" disabled value={user.firstName || ""} />
                </div>
                <div className={styles.col}>
                    <label>Last Name *</label>
                    <Input type="text" disabled value={user.lastName || ""} />
                </div>
            </div>
            <label>Country *</label>
            <Input
                type="text"
                disabled
                value={user.shippingAddress?.country || ""}
            />

            <div className="row">
                <div className={styles.col}>
                    <label>Town / City *</label>
                    <Input
                        type="text"
                        disabled
                        value={user.shippingAddress?.city || ""}
                    />
                </div>
                <div className={styles.col}>
                    <label>Street *</label>
                    <Input
                        type="text"
                        disabled
                        value={user.shippingAddress?.street || ""}
                    />
                </div>
            </div>
            <div className="row">
                <div className={styles.col}>
                    <label>Home number *</label>
                    <Input
                        type="text"
                        disabled
                        value={user.shippingAddress?.homeNumber || ""}
                    />
                </div>
                <div className={styles.col}>
                    <label>Postcode / ZIP *</label>
                    <Input
                        type="text"
                        disabled
                        value={user.shippingAddress?.postIndex || ""}
                    />
                </div>
            </div>
            <label>Phone *</label>
            <Input type="phone" disabled value={user.phone || ""} />
            <label>Email address *</label>
            <Input type="email" disabled value={user.email || ""} />
            <Link
                href="#"
                className={styles.link}
                onClick={setOpenedPopupHandler}
                scroll={false}
            >
                Ship to a different address?
            </Link>
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
