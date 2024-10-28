import { Currency } from "@/types/currency.type";
import { getServerCookie } from "./getServerCookie";

export const getCurrency = async (): Promise<Currency> => {
    const currency = (await getServerCookie("currency")) as Currency;

    return currency;
};
