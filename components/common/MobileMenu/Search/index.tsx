"use client";

import styles from "./styles.module.scss";
import { getProducts } from "@/api/products";
import { Button } from "@/components/UI/Button";
import { getCurrency } from "@/helpers/getCurrency";
import { getProductPrice } from "@/helpers/getProductPrice";
import { onOutsideClick } from "@/helpers/onOutsideClick";
import { Product } from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import { LiaSearchSolid } from "react-icons/lia";

export const Search = () => {
    const formRef = useRef<HTMLFormElement>(null);
    onOutsideClick(formRef, () => {
        setIsSearchListOpened(false);
    });

    const [search, setSearch] = useState<string>("");
    const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
    const [isSearchListOpened, setIsSearchListOpened] =
        useState<boolean>(false);
    const [currency, setCurrency] = useState<Currency>("uah");

    const searchProducts = async () => {
        if (search.length >= 3) {
            setIsSearchListOpened(true);
            const searchedProducts = await getProducts({ search });

            setSearchedProducts(searchedProducts.data);
        } else {
            setIsSearchListOpened(false);
            setSearchedProducts([]);
        }
    };

    const onSearchButtonClick = (e: FormEvent) => {
        e.preventDefault();
    };

    useEffect(() => {
        searchProducts();
    }, [search]);

    const getAndSetCurrency = async () => {
        const currency = await getCurrency();

        setCurrency(currency);
    };

    useEffect(() => {
        getAndSetCurrency();
    }, []);

    return (
        <form
            action="#"
            method="get"
            className={styles.mobileSearch}
            ref={formRef}
        >
            <label htmlFor="mobile-search" className="sr-only">
                Search
            </label>
            <input
                type="search"
                name="mobile-search"
                id="mobile-search"
                placeholder="Search in..."
                required={true}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <Button colorType="btnPrimary" onClick={onSearchButtonClick}>
                <LiaSearchSolid />
            </Button>
            {isSearchListOpened && (
                <ul className={styles.searchResults}>
                    {searchedProducts.length ? (
                        searchedProducts.map((product, index) => (
                            <li key={index}>
                                <figure className={styles.leftColumn}>
                                    <Image
                                        src={product.mainImage}
                                        alt="Product image"
                                        sizes="100vw"
                                        height={0}
                                        width={0}
                                    />
                                </figure>
                                <div className={styles.rightColumn}>
                                    <Link
                                        href={`/products/${product.id}`}
                                        className={styles.title}
                                    >
                                        {product.title}
                                    </Link>
                                    <div className={styles.price}>
                                        {getProductPrice(
                                            product.priceUah,
                                            product.priceEur,
                                            product.priceWithDiscountUah,
                                            product.priceWithDiscountEur,
                                            currency
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))
                    ) : (
                        <li className={styles.noResults}>No results found</li>
                    )}
                </ul>
            )}
        </form>
    );
};
