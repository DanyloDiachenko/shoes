"use client";

import { onOutsideClick } from "@/helpers/onOutsideClick";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import styles from "./search.module.scss";

export const Search = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchWrapperRef = useRef<HTMLDivElement>(null);

    const toggleSearch = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
    };

    const closeSearch = () => {
        setIsSearchOpen(false);
    };

    useEffect(() => {
        if (isSearchOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isSearchOpen]);

    onOutsideClick(searchWrapperRef, closeSearch);

    return (
        <div className={styles.headerSearch}>
            <Link
                href="#"
                className={`${styles.searchToogle} ${
                    isSearchOpen ? styles.active : ""
                }`}
                role="button"
                title="Search"
                onClick={toggleSearch}
            >
                <LiaSearchSolid />
            </Link>
            <form action="#" method="get">
                <div
                    className={`${styles.headerSearchWrapper} ${
                        isSearchOpen ? styles.show : ""
                    }`}
                    ref={searchWrapperRef}
                    onClick={(e) => e.stopPropagation()}
                >
                    <label htmlFor="q" className="hidden">
                        Search
                    </label>
                    <input
                        type="search"
                        className={styles.formControl}
                        name="q"
                        id="q"
                        placeholder="Search in..."
                        required
                        ref={searchInputRef}
                    />
                </div>
            </form>
        </div>
    );
};
