import { Product } from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";
import { getServerCookie } from "./getServerCookie";

export const getProductPrice = (priceUah: number, priceEur: number) => {
    const currency = getServerCookie("currency") as Currency;

    return currency === "uah"
        ? `₴${priceUah.toFixed(2)}`
        : `€${priceEur.toFixed(2)}`;
};
