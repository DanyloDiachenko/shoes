"use client";

import { useState } from "react";
import Link from "next/link";
import { LanguageDropdownProps } from "./languageDropdown.props";
import { LanguageType } from "@/types/language.type";
import { setCookie } from "@/helpers/setCookie";
import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";

export const LanguageDropdown = ({ serverLanguage }: LanguageDropdownProps) => {
    const [language, setLanguage] = useState<LanguageType>(serverLanguage);

    const onLanguageClick = (language: LanguageType) => {
        setCookie("language", language);
        setLanguage(language);

        location.reload();
    };

    return (
        <div className={styles.headerDropdown}>
            <Link href="#" className={styles.active}>
                {language === "en" ? "Eng" : "Укр"}
                <IoIosArrowDown />
            </Link>
            <div className={styles.headerMenu}>
                <ul>
                    <li>
                        <Link href="#" onClick={() => onLanguageClick("en")}>
                            English
                        </Link>
                    </li>
                    <li>
                        <Link href="#" onClick={() => onLanguageClick("uk")}>
                            Ukrainian
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
