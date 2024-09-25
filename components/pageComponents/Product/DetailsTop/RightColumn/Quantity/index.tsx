"use client";

import { useState } from "react";
import { QuantityProps } from "./quantity.props";
import styles from "./styles.module.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setProductToCart } from "@/store/slices/productToCart";

export const Quantity = ({ product }: QuantityProps) => {
    const dispatch = useDispatch();
    const productToCart = useSelector(
        (state: RootState) => state.productToCart
    );

    const setProductQuantityToCart = (quantity: number) => {
        dispatch(
            setProductToCart({
                ...productToCart,
                quantity,
            })
        );
    };

    return (
        <div className={styles.detailsFilter}>
            <label htmlFor="qty">Qty:</label>
            <div className={styles.quantityFilter}>
                <button
                    className={`${styles.decrement} ${
                        productToCart.quantity === 1 ? styles.disabled : ""
                    }`}
                    aria-label="Decrement"
                    onClick={() =>
                        setProductQuantityToCart(productToCart.quantity - 1)
                    }
                    disabled={productToCart.quantity === 1}
                >
                    <FaMinus />
                </button>
                <input
                    type="number"
                    id="qty"
                    className={styles.input}
                    min="1"
                    value={productToCart.quantity}
                    max={product.quantityInStock}
                    step="1"
                    data-decimals="0"
                    required
                    disabled
                />
                <button
                    className={`${styles.increment} ${
                        productToCart.quantity === product.quantityInStock
                            ? styles.disabled
                            : ""
                    }`}
                    aria-label="Increment"
                    onClick={() =>
                        setProductQuantityToCart(productToCart.quantity + 1)
                    }
                    disabled={
                        productToCart.quantity === product.quantityInStock
                    }
                >
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};
