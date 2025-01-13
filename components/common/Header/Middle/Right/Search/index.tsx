"use client";

import { onOutsideClick } from "@/helpers/onOutsideClick";
import Link from "next/link";
import { MouseEvent, useEffect, useRef, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";
import styles from "./search.module.scss";
import Image from "next/image";
import { getProducts } from "@/app/api/products";
import { Product } from "@/interfaces/product.interface";
import { getProductPrice } from "@/helpers/getProductPrice";
import { SearchProps } from "./search.props";

export const Search = ({ currency }: SearchProps) => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [search, setSearch] = useState<string>("");
    const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
    const [isSearchListOpened, setIsSearchListOpened] =
        useState<boolean>(false);

    const searchInputRef = useRef<HTMLInputElement>(null);
    const searchWrapperRef = useRef<HTMLDivElement>(null);

    const toggleSearch = (e: MouseEvent) => {
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

    const searchProducts = async () => {
        if (search.length >= 3) {
            setIsSearchListOpened(true);
            const searchedProducts = await getProducts({ search });

            setSearchedProducts(searchedProducts.data);
        } else {
            setIsSearchListOpened(false);
        }
    };

    useEffect(() => {
        searchProducts();
    }, [search]);

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
                    <label htmlFor="q" className="sr-only">
                        Search
                    </label>
                    <input
                        type="search"
                        className={styles.formControl}
                        name="q"
                        id="q"
                        placeholder="Search in..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        required
                        ref={searchInputRef}
                    />
                    {isSearchListOpened && (
                        <ul className={styles.searchResults}>
                            {searchedProducts.length ? (
                                searchedProducts.map((product, index) => (
                                    <li key={index}>
                                        <Image
                                            src={product.mainImage}
                                            alt="Product image"
                                            width={60}
                                            height={60}
                                        />
                                        <div className={styles.rightColumn}>
                                            <h4 className={styles.title}>
                                                {product.title}
                                            </h4>
                                            {getProductPrice(
                                                product.priceUah,
                                                product.priceEur,
                                                product.priceWithDiscountUah,
                                                product.priceWithDiscountEur,
                                                currency
                                            )}
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className={styles.noResults}>
                                    No results found
                                </li>
                            )}
                        </ul>
                    )}
                </div>
            </form>
        </div>
    );
};
