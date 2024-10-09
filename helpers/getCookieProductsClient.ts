import { ProductCookie } from "@/interfaces/productCookie.interface";
import { getClientCookie } from "./getClientCookie";

export const getCookieProductsClient = (): ProductCookie[] => {
    const cookieProductsString = getClientCookie("cart") || "";
    const cookieProducts: ProductCookie[] = cookieProductsString
        ? JSON.parse(cookieProductsString)
        : [];

    return cookieProducts;
};
