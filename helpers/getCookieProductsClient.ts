import { ProductCookie } from "@/interfaces/productCookie.interface";
import { getCookie } from "./getCookie";

export const getCookieProductsClient = async (): Promise<ProductCookie[]> => {
    const cookieProductsString = (await getCookie("cart")) || "";
    const cookieProducts: ProductCookie[] = cookieProductsString
        ? JSON.parse(cookieProductsString)
        : [];

    return cookieProducts;
};
