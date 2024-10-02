"use client";

import { useState } from "react";
import Link from "next/link";
import { CurrencyType } from "../../../../../types/currency.type";
import { setCookie } from "@/helpers/setCookie";
import { CurrencyDropdownProps } from "./currencyDropdown.props";
import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";

export const CurrencyDropdown = ({ serverCurrency }: CurrencyDropdownProps) => {
    const [currency, setCurrency] = useState<CurrencyType>(serverCurrency);

    const onCurrencyClick = (clickedCurrency: "uah" | "eur") => {
        if (currency === clickedCurrency) {
            return;
        }

        setCookie("currency", clickedCurrency);
        setCurrency(clickedCurrency);

        location.reload();
    };

    return (
        <div className={styles.headerDropdown}>
            <Link href="#" className={styles.active}>
                {currency}
                <IoIosArrowDown />
            </Link>
            <div className={styles.headerMenu}>
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
