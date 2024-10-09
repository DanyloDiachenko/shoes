"use client";

import { useState } from "react";
import Link from "next/link";
import { Currency } from "../../../../../types/currency.type";
import { setCookie } from "@/helpers/setCookie";
import { CurrencyDropdownProps } from "./currencyDropdown.props";
import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";

export const CurrencyDropdown = ({ currency }: CurrencyDropdownProps) => {
    const [currencyClient, setCurrencyClient] = useState<Currency>(currency);

    const onCurrencyClick = (clickedCurrency: Currency) => {
        if (currencyClient === clickedCurrency) {
            return;
        }

        setCookie("currency", clickedCurrency);
        setCurrencyClient(clickedCurrency);

        location.reload();
    };

    return (
        <div className={styles.headerDropdown}>
            <Link href="#" className={styles.active}>
                {currencyClient}
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
