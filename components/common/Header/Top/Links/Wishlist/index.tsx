"use client";

import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import styles from "./styles.module.scss";
import { WishlistProps } from "./wishlist.props";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { getCookie } from "@/helpers/getCookie";

export const Wishlist = ({ wishlistIdsServer }: WishlistProps) => {
    const localStorageToogler = useSelector(
        (state: RootState) => state.toogleLocalStorage.value
    );

    const [wishlistIds, setWishlistIds] = useState<string[]>(wishlistIdsServer);

    const updateWishlistIds = async () => {
        const wishlistIdsString = await getCookie("wishlistIds");
        const wishlistIds: string[] = wishlistIdsString
            ? JSON.parse(wishlistIdsString)
            : [];

        setWishlistIds(wishlistIds);
    };

    useEffect(() => {
        updateWishlistIds();
    }, [localStorageToogler]);

    return (
        <Link href="/wishlist" className={styles.iconLink}>
            <FaRegHeart />
            <span>
                Wishlist{" "}
                <span className={styles.wishlistQuantity}>
                    ({wishlistIds.length})
                </span>
            </span>
        </Link>
    );
};
