import { IProductCookie } from "@/interfaces/productCookie.interface";
import { getClientCookie } from "./getClientCookie";

export const getCookieProductsClient = (): IProductCookie[] => {
    const cookieProductsString = getClientCookie("cart") || "";
    const cookieProducts: IProductCookie[] = cookieProductsString
        ? JSON.parse(cookieProductsString)
        : [];

    return cookieProducts;
};
