"use client";

import { RootState } from "@/store";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { ProductToCartState } from "@/store/slices/productToCart/productToCart.interface";
import { setProductToCart } from "@/store/slices/productToCart";
import { FaMinus, FaPlus } from "react-icons/fa";
import { ProductQuantityProps } from "./quantity.props";

export const ProductQuantity = ({ product }: ProductQuantityProps) => {
    const dispatch = useDispatch();

    const productToCart = useSelector(
        (state: RootState) => state.productToCart
    );

    const setProductToCartHandler = (productToCart: ProductToCartState) => {
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
