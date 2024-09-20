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

export const Actions = ({ product }: ActionsProps) => {
    const dispatch = useDispatch();

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const productToCart = useSelector(
        (state: RootState) => state.productToCart
    );

    const onAddToCartClick = () => {
        if (!productToCart.sizeId) {
            toast.error("Please select size");

            return;
        }

        /* add to cookies, toogle local storage */
        toogleLocalStorageHandler();
        toast.success("Product successfully added to cart");
    };

    return (
        <div className={styles.actions}>
            <Button
                colorType="btnOutlinePrimary2"
                className={`${styles.addToCart}`}
                /* className={`${styles.addToCart} ${styles.inactive}`} */
                onClick={onAddToCartClick}
            >
                <LiaCartPlusSolid />
                <span>add to cart</span>
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
