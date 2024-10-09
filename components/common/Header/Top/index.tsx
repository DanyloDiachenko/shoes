import { CurrencyDropdown } from "./CurrencyDropdown";
import { Links } from "./Links";
import styles from "./styles.module.scss";
import { getCurrency } from "@/helpers/getCurrency";

export const Top = async () => {
    const currency = getCurrency();

    return (
        <div className={styles.headerTop}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.headerLeft}>
                    <CurrencyDropdown currency={currency} />
                </div>
                <Links />
            </div>
        </div>
    );
};
