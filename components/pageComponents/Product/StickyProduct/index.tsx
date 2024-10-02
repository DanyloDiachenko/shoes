"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { StickyProductProps } from "./stickyProduct.props";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { IProductCookie } from "@/interfaces/productCookie.interface";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { IProductToCartState } from "@/store/slices/productToCart/productToCart.interface";
import { setProductToCart } from "@/store/slices/productToCart";
import { toast } from "react-toastify";
import { setCookie } from "@/helpers/setCookie";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { Quantity } from "./Quantity";

export const StickyProduct = ({
    product,
    serverCurrency,
    cookieProducts,
}: StickyProductProps) => {
    const dispatch = useDispatch();
    const localStorageToogler = useSelector(
        (state: RootState) => state.toogleLocalStorage.value
    );

    const [cookieProductsClient, setCookieProductsClient] =
        useState<IProductCookie[]>(cookieProducts);

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };
    const setProductToCartHandler = (productToCart: IProductToCartState) => {
        dispatch(setProductToCart(productToCart));
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

        setProductToCartHandler({
            quantity: 0,
            sizeId: null,
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

    useEffect(() => {
        const cookieProducts = getCookieProductsClient();

        setCookieProductsClient(cookieProducts);
    }, [localStorageToogler]);

    return (
        <div className={styles.stickyProduct}>
            <div className={`container ${styles.container}`}>
                <div className={`row ${styles.row}`}>
                    <div className={styles.columnLeft}>
                        <figure className={styles.media}>
                            <Link href={`/products/${product.id}`}>
                                <img
                                    src={product.mainImage}
                                    alt="Product image"
                                />
                            </Link>
                        </figure>
                        <h4 className={styles.title}>
                            <Link href={`/products/${product.id}`}>
                                {product.title}
                            </Link>
                        </h4>
                    </div>
                    <div className={styles.columnRight}>
                        <div className={styles.price}>
                            {serverCurrency === "uah" ? "₴" : "€"}
                            {serverCurrency === "uah"
                                ? product.priceUah.toFixed(2)
                                : product.priceEur.toFixed(2)}
                        </div>
                        <Quantity product={product} />
                        <div className={styles.actions}>
                            <Button
                                colorType="btnOutlinePrimary2"
                                className={`${styles.addToCart}`}
                                onClick={
                                    cookieProductsClient.find(
                                        (productCookie) =>
                                            productCookie.id === product.id
                                    )
                                        ? onRemoveProductClick
                                        : onAddToCartClick
                                }
                            >
                                <LiaCartPlusSolid />
                                <span>
                                    {cookieProductsClient.find(
                                        (productCookie) =>
                                            productCookie.id === product.id
                                    )
                                        ? "Remove from cart"
                                        : "Add to cart"}
                                </span>
                            </Button>
                            <Button
                                className={styles.addToWishlist}
                                title="Add to wishlist"
                                colorType="btnOutlinePrimary2"
                            >
                                <FaRegHeart />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
