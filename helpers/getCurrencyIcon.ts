import { Currency } from "@/types/currency.type";

export const getCurrencyIcon = (currency: Currency) => {
    if (currency === "uah") {
        return "₴";
    } else {
        return "€";
    }
};
