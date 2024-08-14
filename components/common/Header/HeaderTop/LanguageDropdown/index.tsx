"use client";

import { useState } from "react";
import Link from "next/link";
import { LanguageDropdownProps } from "./languageDropdown.props";
import { LanguageType } from "@/types/language.type";
import { setCookie } from "@/helpers/setCookie";

export const LanguageDropdown = ({ serverLanguage }: LanguageDropdownProps) => {
    const [language, setLanguage] = useState<LanguageType>(serverLanguage);

    const onLanguageClick = (language: LanguageType) => {
        setCookie("language", language);
        setLanguage(language);
    };

    return (
        <div className="header-dropdown">
            <Link href="#">{language === "en" ? "Eng" : "Укр"}</Link>
            <div className="header-menu">
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
