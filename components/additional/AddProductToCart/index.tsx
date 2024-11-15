"use client";

import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { AddProductToCartProps } from "./addProductToCart.props";
import { ProductToCartState } from "@/store/slices/productToCart/productToCart.interface";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { setProductToCart } from "@/store/slices/productToCart";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { toast } from "react-toastify";
import { setCookie } from "@/helpers/setCookie";
import { LiaCartPlusSolid } from "react-icons/lia";

export const AddProductToCart = ({
    cookieProducts,
    product,
}: AddProductToCartProps) => {
    const dispatch = useDispatch();
    const localStorageToogler = useSelector(
        (state: RootState) => state.toogleLocalStorage.value
    );
    const productToCart = useSelector(
        (state: RootState) => state.productToCart
    );

    const [cookieProductsClient, setCookieProductsClient] =
        useState<CookieProduct[]>(cookieProducts);

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };
    const setProductToCartHandler = (productToCart: ProductToCartState) => {
        dispatch(setProductToCart(productToCart));
    };

    const onAddToCartClick = () => {
        if (cookieProducts.find((p) => p.id === product.id)) {
            toast.error("Product already in cart");
            return;
        }

        if (!productToCart.size) {
            toast.error("Please select size");
            return;
        }

        const newCookieProducts: CookieProduct[] = [
            ...cookieProducts,
            {
                id: product.id,
                quantity: productToCart.quantity,
                size: productToCart.size,
            },
        ];

        setCookie("cart", JSON.stringify(newCookieProducts));
        setCookieProductsClient(newCookieProducts);
        toogleLocalStorageHandler();

        setProductToCartHandler({
            quantity: 1,
            size: null,
        });

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

    const getCookieProductsClientHandler = async () => {
        const cookieProducts = await getCookieProductsClient();

        setCookieProductsClient(cookieProducts);
    };

    useEffect(() => {
        getCookieProductsClientHandler();
    }, [localStorageToogler]);

    return (
        <Button
            colorType="btnOutlinePrimary2"
            className={`${styles.addToCart}`}
            /* className={`${styles.addToCart} ${styles.inactive}`} */
            onClick={
                cookieProductsClient.find(
                    (CookieProduct) => cookieProduct.id === product.id
                )
                    ? onRemoveProductClick
                    : onAddToCartClick
            }
        >
            <LiaCartPlusSolid />
            <span>
                {cookieProductsClient.find(
                    (CookieProduct) => cookieProduct.id === product.id
                )
                    ? "Remove from cart"
                    : "Add to cart"}
            </span>
        </Button>
    );
};
