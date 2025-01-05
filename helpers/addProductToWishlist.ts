import { setCookie } from "./setCookie";

export const addProductToWishlist = (productId: string) => {
    const wishlistIds = localStorage.getItem("wishlistIds");

    if (wishlistIds) {
        const wishlistIds: string[] = JSON.parse("wishlistIds");

        if (wishlistIds.includes(productId)) {
            const newWishlistIds = wishlistIds.filter(
                (wishlistId) => wishlistId !== productId
            );

            setCookie("wishlistIds", JSON.stringify(newWishlistIds));
        } else {
            const newWishlistIds = [...wishlistIds, productId];

            setCookie("wishlistIds", JSON.stringify(newWishlistIds));
        }
    }

    setCookie("wishlistIds", JSON.stringify([productId]));
};
