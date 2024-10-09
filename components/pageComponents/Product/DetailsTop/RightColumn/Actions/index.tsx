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
import { setCookie } from "@/helpers/setCookie";
import { useEffect, useState } from "react";
import { setProductToCart } from "@/store/slices/productToCart";
import { getCookieProductsClient } from "@/helpers/getCookieProductsClient";
import { ProductCookie } from "@/interfaces/productCookie.interface";
import { ProductToCartState } from "@/store/slices/productToCart/productToCart.interface";

export const Actions = ({ product, cookieProducts }: ActionsProps) => {
    return (
        <div className={styles.actions}>
            {/*  */}
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
