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
                product.priceWithDiscountUah !== 0 && product.priceWithDiscountUah * productToCart.quantity || 0,
                product.priceWithDiscountEur !== 0 && product.priceWithDiscountEur * productToCart.quantity || 0,
                currency
            )}
        </div>
    );
};
