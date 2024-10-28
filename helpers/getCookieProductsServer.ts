import { ProductCookie } from "@/interfaces/productCookie.interface";
import { cookies } from "next/headers";

export const getCookieProductsServer = async (): Promise<
    ProductCookie[] | null
> => {
    const cookieProductsString =
        (await (await cookies()).get("cart")?.value) || "";
    const cookieProducts: ProductCookie[] = cookieProductsString
        ? JSON.parse(cookieProductsString)
        : [];

    return cookieProducts;
};
