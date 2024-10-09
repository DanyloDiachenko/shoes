import { getServerCookie } from "@/helpers/getServerCookie";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { Links } from "./Links";
import { Currency } from "@/types/currency.type";
import styles from "./styles.module.scss";
import { getCurrency } from "@/helpers/getCurrency";

export const Top = async () => {
    const currency = getCurrency();

    return (
        <div className={styles.headerTop}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.headerLeft}>
                    <CurrencyDropdown serverCurrency={currency} />
                </div>
                <Links />
            </div>
        </div>
    );
};
