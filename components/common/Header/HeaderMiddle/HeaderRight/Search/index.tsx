"use client";

import { onOutsideClick } from "@/helpers/onOutsideClick";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

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
        <div className="header-search">
            <Link
                href="#"
                className={`search-toggle ${isSearchOpen ? "active" : ""}`}
                role="button"
                title="Search"
                onClick={toggleSearch}
            >
                <i className="icon-search"></i>
            </Link>
            <form action="#" method="get">
                <div
                    className={`header-search-wrapper ${
                        isSearchOpen ? "show" : ""
                    }`}
                    ref={searchWrapperRef}
                    onClick={(e) => e.stopPropagation()}
                >
                    <label htmlFor="q" className="sr-only">
                        Search
                    </label>
                    <input
                        type="search"
                        className="form-control"
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
