import { getServerCookie } from "@/helpers/getServerCookie";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { LanguageDropdown } from "./LanguageDropdown";
import { Links } from "./Links";
import { CurrencyType } from "@/types/currency.type";
import { LanguageType } from "@/types/language.type";
import styles from "./styles.module.scss";

export const HeaderTop = async () => {
    const currency = (getServerCookie("currency") || "uah") as CurrencyType;
    const language = (getServerCookie("language") || "en") as LanguageType;

    return (
        <div className={styles.headerTop}>
            <div className={`container ${styles.headerContainer}`}>
                <div className={styles.headerLeft}>
                    <CurrencyDropdown serverCurrency={currency} />
                    <LanguageDropdown serverLanguage={language} />
                </div>
                <Links />
            </div>
        </div>
    );
};
