import { getCookie } from "./getCookie";

export const getWishlistIds = async () => {
    const wishlistIdsString = await getCookie("wishlistIds");
    
    return wishlistIdsString ? JSON.parse(wishlistIdsString) : [];
};
