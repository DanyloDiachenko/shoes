import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { getCookie } from "./getCookie";

export const getCookieProductsClient = async (): Promise<CookieProduct[]> => {
    const cookieProductsString = (await getCookie("cart")) || "";
    const cookieProducts: CookieProduct[] = cookieProductsString
        ? JSON.parse(cookieProductsString)
        : [];

    return cookieProducts;
};
