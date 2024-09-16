"use client";

import { useState } from "react";
import { QuantityProps } from "./quantity.props";
import styles from "./styles.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa";

export const Quantity = ({ product }: QuantityProps) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className={styles.detailsFilter}>
            <label htmlFor="qty">Qty:</label>
            <div className={styles.quantityFilter}>
                <button
                    className={`${styles.decrement} ${
                        quantity === 1 ? styles.disabled : ""
                    }`}
                    aria-label="Decrement"
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity === 1}
                >
                    <FaMinus />
                </button>
                <input
                    type="number"
                    id="qty"
                    className={styles.input}
                    defaultValue="1"
                    min="1"
                    value={quantity}
                    max={product.quantityInStock}
                    step="1"
                    data-decimals="0"
                    required
                    disabled
                />
                <button
                    className={`${styles.increment} ${
                        quantity === product.quantityInStock
                            ? styles.disabled
                            : ""
                    }`}
                    aria-label="Increment"
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity === product.quantityInStock}
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};
