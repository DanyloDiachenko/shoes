import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { cookies } from "next/headers";

export const getCookieProductsServer = async (): Promise<
    CookieProduct[] | null
> => {
    const cookieProductsString = (await cookies()).get("cart")?.value || "";

    const cookieProducts: CookieProduct[] = cookieProductsString
        ? JSON.parse(cookieProductsString)
        : [];

    return cookieProducts;
};
