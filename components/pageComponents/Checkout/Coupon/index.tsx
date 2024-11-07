"use client";

import { Input } from "@/components/UI/Input";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Coupon = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className={styles.discount}>
            <form action="#">
                <Input
                    type="text"
                    id="checkout-discount-input"
                    className={isFocused ? styles.focused : ""}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                />
                <label
                    htmlFor="checkout-discount-input"
                    className={`${styles.label} ${
                        isFocused ? styles.focused : ""
                    }`}
                >
                    Have a coupon? <span>Click here to enter your code</span>
                </label>
            </form>
        </div>
    );
};
