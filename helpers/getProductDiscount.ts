import { Currency } from "@/types/currency.type";

export const getProductDiscount = (
    currency: Currency,
    priceWithDiscountUah: number,
    priceUah: number,
    priceWithDiscountEur: number,
    priceEur: number
) => {
    return currency === "uah"
        ? `${100 - Math.round((priceWithDiscountUah * 100) / priceUah)}% off`
        : `${100 - Math.round((priceWithDiscountEur * 100) / priceEur)}% off`;
};
