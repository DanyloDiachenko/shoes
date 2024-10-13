import { Currency } from "@/types/currency.type";
import { getCurrencyIcon } from "./getCurrencyIcon";

export const getProductPrice = (
    priceUah: number,
    priceEur: number,
    currency: Currency
) => {
    return currency === "uah"
        ? `${getCurrencyIcon(currency)}${priceUah.toFixed(2)}`
        : `${getCurrencyIcon(currency)}${priceEur.toFixed(2)}`;
};
