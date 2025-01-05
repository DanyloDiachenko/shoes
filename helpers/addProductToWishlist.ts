import { toast } from "react-toastify";
import { setCookie } from "./setCookie";
import { getCookie } from "./getCookie";

export const addProductToWishlist = async (productId: string) => {
    const wishlistIdsString = await getCookie("wishlistIds");

    if (wishlistIdsString) {
        const wishlistIds: string[] = JSON.parse(wishlistIdsString);

        if (wishlistIds.includes(productId)) {
            const newWishlistIds = wishlistIds.filter(
                (wishlistProductId) => wishlistProductId !== productId
            );

            setCookie("wishlistIds", JSON.stringify(newWishlistIds));
            toast.success("Product removed from wishlist");
        } else {
            const newWishlistIds = [...wishlistIds, productId];

            setCookie("wishlistIds", JSON.stringify(newWishlistIds));
            toast.success("Product added to wishlist");
        }
    } else {
        setCookie("wishlistIds", JSON.stringify([productId]));
        toast.success("Product added to wishlist");
    }
};
