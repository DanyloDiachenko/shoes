import { Currency } from "@/types/currency.type";
import { getServerCookie } from "./getServerCookie";

export const getCurrency = (): Currency => {
    const currency = getServerCookie("currency") as Currency;

    return currency;
};
