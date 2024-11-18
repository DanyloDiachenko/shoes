"use client";

import Link from "next/link";
import { Currency } from "../../../../../types/currency.type";
import { setCookie } from "@/helpers/setCookie";
import { CurrencyDropdownProps } from "./currencyDropdown.props";
import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";

export const CurrencyDropdown = ({ currency }: CurrencyDropdownProps) => {
    const onCurrencyClick = async (clickedCurrency: Currency) => {
        if (currency === clickedCurrency) {
            return;
        }
        console.log(clickedCurrency);

        setCookie("currency", clickedCurrency);
        /* location.reload(); */
    };

    return (
        <div className={styles.headerDropdown}>
            <div className={styles.active}>
                {currency}
                <IoIosArrowDown />
            </div>
            <div className={styles.headerMenu}>
                <ul>
                    <li>
                        <button onClick={() => onCurrencyClick("uah")}>
                            UAH
                        </button>
                    </li>
                    <li>
                        <button onClick={() => onCurrencyClick("eur")}>
                            EUR
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};
