import { IProductCookie } from "@/interfaces/productCookie.interface";
import { cookies } from "next/headers";

export const getCookieProductsServer = (): IProductCookie[] => {
    const cookieProductsString = cookies().get("cart")?.value || "";
    const cookieProducts: IProductCookie[] = cookieProductsString
        ? JSON.parse(cookieProductsString)
        : [];

    return cookieProducts;
};
