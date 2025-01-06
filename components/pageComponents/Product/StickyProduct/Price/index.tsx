"use client";

import { getProductPrice } from "@/helpers/getProductPrice";
import styles from "./styles.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { PriceProps } from "./price.props";

export const Price = ({ currency, product }: PriceProps) => {
    const productToCart = useSelector(
        (state: RootState) => state.productToCart
    );

    return (
        <div className={styles.price}>
            {getProductPrice(
                product.priceUah * productToCart.quantity,
                product.priceEur * productToCart.quantity,
                product.priceWithDiscountUah && product.priceWithDiscountUah * productToCart.quantity || null,
                product.priceWithDiscountEur && product.priceWithDiscountEur * productToCart.quantity || null,
                currency
            )}
        </div>
    );
};
