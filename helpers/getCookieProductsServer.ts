import { ProductCookie } from "@/interfaces/productCookie.interface";
import { cookies } from "next/headers";

export const getCookieProductsServer = (): ProductCookie[] | null => {
    const cookieProductsString = cookies().get("cart")?.value || "";
    const cookieProducts: ProductCookie[] = cookieProductsString
        ? JSON.parse(cookieProductsString)
        : [];

    return cookieProducts;
};
