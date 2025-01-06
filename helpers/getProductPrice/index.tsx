import styles from "./styles.module.scss";
import { Currency } from "@/types/currency.type";
import { getCurrencyIcon } from "../getCurrencyIcon";

const printPriceWithCurrency = (
    priceUah: number,
    priceEur: number,
    currency: Currency
) => {
    return currency === "uah"
        ? `${getCurrencyIcon(currency)}${priceUah.toFixed(2)}`
        : `${getCurrencyIcon(currency)}${priceEur.toFixed(2)}`;
};

export const getProductPrice = (
    priceUah: number,
    priceEur: number,
    priceWithDiscountUah: number | null,
    priceWithDiscountEur: number | null,
    currency: Currency
) => {
    return (
        <>
            {priceWithDiscountUah && priceWithDiscountEur && (
                <span className={styles.currentPrice}>
                    {printPriceWithCurrency(
                        priceWithDiscountUah,
                        priceWithDiscountEur,
                        currency
                    )}
                </span>
            )}
            <span
                className={`${
                    priceWithDiscountUah ? styles.previousPrice : ""
                }`}
            >
                {printPriceWithCurrency(priceUah, priceEur, currency)}
            </span>
        </>
    );
};
