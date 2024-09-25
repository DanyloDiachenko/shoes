"use client";

import { LiaCartPlusSolid } from "react-icons/lia";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { ActionsProps } from "./actions.props";
import { toast } from "react-toastify";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { getClientCookie } from "@/helpers/getClientCookie";
import { IProductCookie } from "@/interfaces/productCookie.interface";
import { setCookie } from "@/helpers/setCookie";
import { useEffect, useState } from "react";

export const Actions = ({ product, cookieProducts }: ActionsProps) => {
    const dispatch = useDispatch();

    const [cookieProductsClient, setCookieProductsClient] =
        useState<IProductCookie[]>(cookieProducts);

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const productToCart = useSelector(
        (state: RootState) => state.productToCart
    );

    const onAddToCartClick = () => {
        if (cookieProductsClient.find((p) => p.id === product.id)) {
            toast.error("Product already in cart");
            return;
        }

        if (!productToCart.sizeId) {
            toast.error("Please select size");
            return;
        }

        const newCookieProducts: IProductCookie[] = [
            ...cookieProductsClient,
            {
                id: product.id,
                quantity: productToCart.quantity,
                colorId: product.color.id,
                sizeId: productToCart.sizeId,
            },
        ];

        setCookie("cart", JSON.stringify(newCookieProducts));
        setCookieProductsClient(newCookieProducts);
        toogleLocalStorageHandler();

        toast.success("Product successfully added to cart");
    };

    const onRemoveProductClick = () => {
        const updatedProducts = cookieProductsClient.filter(
            (p) => p.id !== product.id
        );

        setCookie("cart", JSON.stringify(updatedProducts));
        setCookieProductsClient(updatedProducts);
        toogleLocalStorageHandler();

        toast.success("Product successfully removed from cart");
    };

    return (
        <div className={styles.actions}>
            <Button
                colorType="btnOutlinePrimary2"
                className={`${styles.addToCart}`}
                /* className={`${styles.addToCart} ${styles.inactive}`} */
                onClick={
                    cookieProductsClient.find(
                        (product) => product.id === product.id
                    )
                        ? onRemoveProductClick
                        : onAddToCartClick
                }
            >
                <LiaCartPlusSolid />
                <span>
                    {cookieProductsClient.find(
                        (product) => product.id === product.id
                    )
                        ? "Remove from cart"
                        : "Add to cart"}
                </span>
            </Button>
            <div className={styles.actionsWrapper}>
                <Button
                    colorType="btnOutlinePrimary2"
                    className={styles.addToWishlist}
                >
                    <FaRegHeart />
                    <span>Add to Wishlist</span>
                </Button>
            </div>
        </div>
    );
};
