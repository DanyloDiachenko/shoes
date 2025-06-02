"use client";

import { Button } from "@/components/UI/Button";
import { addProductToWishlist } from "@/helpers/addProductToWishlist";
import { useDispatch } from "react-redux";
import { AddToWishlistProps } from "./addToWishlist.props";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import styles from "./styles.module.scss";
import { FaRegHeart } from "react-icons/fa";
import Link from "next/link";

export const AddToWishlist = ({ product }: AddToWishlistProps) => {
    const dispatch = useDispatch();

    const onAddToWislistClick = () => {
        addProductToWishlist(product.id);
        dispatch(toogleLocalStorage());
    };

    return (
        <Link
            href="#"
            scroll={false}
            className={styles.addToWishlist}
            onClick={onAddToWislistClick}
        >
            <FaRegHeart />
            <span>Add to Wishlist</span>
        </Link>
    );
};
