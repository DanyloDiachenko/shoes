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
    priceWithDiscountUah: number,
    priceWithDiscountEur: number,
    currency: Currency
) => {
    return (
        <>
            {priceWithDiscountEur !== 0 && priceWithDiscountUah !== 0 ? (
                <>
                    <span className={styles.currentPrice}>
                        {printPriceWithCurrency(
                            priceWithDiscountUah,
                            priceWithDiscountEur,
                            currency
                        )}
                    </span>
                    <span className={styles.previousPrice}>
                        {printPriceWithCurrency(priceUah, priceEur, currency)}
                    </span>
                </>
            ) : (
                <span className={styles.price}>
                    {printPriceWithCurrency(priceUah, priceEur, currency)}
                </span>
            )}
        </>
    );
};
