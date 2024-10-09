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
import { ProductCookie } from "@/interfaces/productCookie.interface";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { ProductToCartState } from "@/store/slices/productToCart/productToCart.interface";
import { setProductToCart } from "@/store/slices/productToCart";
import { toast } from "react-toastify";
import { setCookie } from "@/helpers/setCookie";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { Quantity } from "./Quantity";
import { getProductPrice } from "@/helpers/getProductPrice";
import { AddProductToCart } from "@/components/additional/AddProductToCart";

export const StickyProduct = ({
    product,
    currency,
    cookieProducts,
}: StickyProductProps) => {
    const productToCart = useSelector(
        (state: RootState) => state.productToCart
    );

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
                            {getProductPrice(
                                product.priceUah * productToCart.quantity,
                                product.priceEur * productToCart.quantity,
                                currency
                            )}
                        </div>
                        <Quantity product={product} />
                        <div className={styles.actions}>
                            <AddProductToCart
                                product={product}
                                cookieProducts={cookieProducts}
                            />
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
