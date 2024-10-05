"use client";

import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa";
import { QuantityProps } from "./quantity.props";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { setCookie } from "@/helpers/setCookie";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";

export const Quantity = ({ quantity, product }: QuantityProps) => {
    const cookieProducts = getCookieProductsClient();

    const dispatch = useDispatch();

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const onQuantityChange = (type: "increment" | "decrement") => {
        const updatedProducts = cookieProducts.map((cookieProduct) => {
            if (cookieProduct.id === product.id) {
                return {
                    ...cookieProduct,
                    quantity:
                        type === "increment"
                            ? cookieProduct.quantity + 1
                            : cookieProduct.quantity - 1,
                };
            }

            return cookieProduct;
        });

        setCookie("cart", JSON.stringify(updatedProducts));

        toogleLocalStorageHandler();
    };

    return (
        <div className={styles.quantityFilter}>
            <button
                className={`${styles.decrement} ${
                    quantity === 1 ? styles.disabled : ""
                }`}
                aria-label="Decrement"
                onClick={() => onQuantityChange("decrement")}
                disabled={quantity === 1}
            >
                <FaMinus />
            </button>
            <input
                type="number"
                id="qty"
                className={styles.input}
                value={quantity}
                min={1}
                max={product.quantityInStock}
                step="1"
                data-decimals="0"
                required
                disabled
            />
            <button
                className={`${styles.increment} ${
                    product.quantityInStock === quantity ? styles.disabled : ""
                }`}
                aria-label="Increment"
                onClick={() =>
                    product.quantityInStock > quantity &&
                    onQuantityChange("increment")
                }
                disabled={quantity === product.quantityInStock}
            >
                <FaPlus />
            </button>
        </div>
    );
};
