import Link from "next/link";
import { CurrencyDropdown } from "./CurrencyDropdown";
import { LanguageDropdown } from "./LanguageDropdown";
import { Links } from "./Links";

export const HeaderTop = () => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <CurrencyDropdown />
                    <LanguageDropdown />
                </div>
                <Links />
            </div>
        </div>
    );
};
