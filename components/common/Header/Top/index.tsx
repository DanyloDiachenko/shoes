import { getServerCookie } from "@/helpers/getServerCookie";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { Links } from "./Links";
import { CurrencyType } from "@/types/currency.type";
import styles from "./styles.module.scss";

export const Top = async () => {
    const currency = (getServerCookie("currency") || "uah") as CurrencyType;

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
