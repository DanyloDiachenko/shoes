"use client";

import { useState } from "react";
import Link from "next/link";
import { CurrencyType } from "../../../../../types/currency.type";
import { setCookie } from "@/helpers/setCookie";
import { CurrencyDropdownProps } from "./currencyDropdown.props";

export const CurrencyDropdown = ({ serverCurrency }: CurrencyDropdownProps) => {
    const [currency, setCurrency] = useState<CurrencyType>(serverCurrency);

    const onCurrencyClick = (currency: "uah" | "eur") => {
        setCookie("currency", currency);
        setCurrency(currency);
    };

    return (
        <div className="header-dropdown">
            <Link href="#">{currency}</Link>
            <div className="header-menu">
                <ul>
                    <li>
                        <Link href="#" onClick={() => onCurrencyClick("uah")}>
                            UAH
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => onCurrencyClick("eur")}>
                            EUR
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
