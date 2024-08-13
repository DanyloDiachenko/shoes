import { getServerCookie } from "@/helpers/getServerCookie";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { LanguageDropdown } from "./LanguageDropdown";
import { Links } from "./Links";
import { CurrencyType } from "@/types/currency.type";

export const HeaderTop = async () => {
    const currency = (getServerCookie("currency") || "uah") as CurrencyType;

    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <CurrencyDropdown serverCurrency={currency} />
                    <LanguageDropdown />
                </div>
                <Links />
            </div>
        </div>
    );
};
