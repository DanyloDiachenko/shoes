"use client";

import { RootState } from "@/store";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { IProductToCartState } from "@/store/slices/productToCart/productToCart.interface";
import { setProductToCart } from "@/store/slices/productToCart";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { QuantityProps } from "./quantity.props";

export const Quantity = ({ product }: QuantityProps) => {
    const dispatch = useDispatch();

    const productToCart = useSelector(
        (state: RootState) => state.productToCart
    );

    const setProductToCartHandler = (productToCart: IProductToCartState) => {
        dispatch(setProductToCart(productToCart));
    };

    return (
        <div className={styles.quantityFilter}>
            <button
                className={`${styles.decrement} ${
                    productToCart.quantity === 1 ? styles.disabled : ""
                }`}
                aria-label="Decrement"
                onClick={() => {
                    productToCart.quantity > 1 &&
                        setProductToCartHandler({
                            ...productToCart,
                            quantity: productToCart.quantity - 1,
                        });
                }}
                disabled={productToCart.quantity === 1}
            >
                <FaMinus />
            </button>
            <input
                type="number"
                id="qty"
                className={styles.input}
                value={productToCart.quantity}
                min={1}
                max={product.quantityInStock}
                step="1"
                data-decimals="0"
                required
                disabled
            />
            <button
                className={`${styles.increment} ${
                    product.quantityInStock === productToCart.quantity
                        ? styles.disabled
                        : ""
                }`}
                aria-label="Increment"
                onClick={() =>
                    product.quantityInStock > productToCart.quantity &&
                    setProductToCartHandler({
                        ...productToCart,
                        quantity: productToCart.quantity + 1,
                    })
                }
                disabled={productToCart.quantity === product.quantityInStock}
            >
                <FaPlus />
            </button>
        </div>
    );
};
