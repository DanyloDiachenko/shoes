import { getCookie } from "./getCookie";

export const getWishlistIds = async (): Promise<string[]> => {
    const wishlistIdsString: string | null = await getCookie("wishlistIds");

    return wishlistIdsString ? JSON.parse(wishlistIdsString) : [];
};
