import { Currency } from "@/types/currency.type";
import { getCookie } from "./getCookie";

export const getCurrency = async (): Promise<Currency> => {
    const currency = (await getCookie("currency")) as Currency;

    return currency;
};
