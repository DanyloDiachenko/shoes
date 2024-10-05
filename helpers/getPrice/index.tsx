import { IProduct } from "@/interfaces/product.interface";

export const getPrice = (product: IProduct, currency: string) => {
    return currency === "uah"
        ? `₴${product.priceUah.toFixed(2)}`
        : `€${product.priceEur.toFixed(2)}`;
};
