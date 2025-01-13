"use client";

import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setMobileMenuState } from "@/store/slices/mobileMenu";
import { Socials } from "./Socials";
import { getNavigation } from "@/helpers/getNavigation";
import Link from "next/link";
import { NavigationItem } from "@/interfaces/navigationItem";
import { Button } from "@/components/UI/Button";
import { LiaSearchSolid } from "react-icons/lia";
import { getProductPrice } from "@/helpers/getProductPrice";
import Image from "next/image";
import { getProducts } from "@/app/api/products";
import { Product } from "@/interfaces/product.interface";
import { getCurrency } from "@/helpers/getCurrency";
import { Currency } from "@/types/currency.type";

export const MobileMenu = () => {
    const dispatch = useDispatch();
    const isOpened = useSelector(
        (state: RootState) => state.mobileMenu.isOpened
    );

    const [activeTabIndex, setActiveTabIndex] = useState<number>(-1);
    const [navigation, setNavigation] = useState<NavigationItem[]>([]);
    const [search, setSearch] = useState<string>("");
    const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
    const [isSearchListOpened, setIsSearchListOpened] =
        useState<boolean>(false);
    const [currency, setCurrency] = useState<Currency>("uah");

    const setMobileMenuStateHandler = (isOpened: boolean) => {
        dispatch(setMobileMenuState(isOpened));
    };

    const onTabClick = (index: number) => {
        if (index === activeTabIndex) {
            setActiveTabIndex(-1);
        } else {
            setActiveTabIndex(index);
        }
    };

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

    const getAndSetCurrency = async () => {
        const currency = await getCurrency();

        setCurrency(currency);
    };

    useEffect(() => {
        searchProducts();
    }, [search]);

    useEffect(() => {
        getNavigation().then((data) => setNavigation(data));
        getAndSetCurrency();
    }, []);

    return (
        <>
            <div
                className={`${styles.mobileMenuOverlay} ${
                    isOpened ? styles.active : ""
                }`}
                onClick={() => setMobileMenuStateHandler(false)}
            ></div>
            <div
                className={`${styles.mobileMenuContainer} ${
                    isOpened ? styles.active : ""
                }`}
            >
                <div className={styles.mobileMenuWrapper}>
                    <button
                        className={styles.mobileMenuClose}
                        onClick={() => setMobileMenuStateHandler(false)}
                    >
                        <IoMdClose />
                    </button>
                    <form
                        action="#"
                        method="get"
                        className={styles.mobileSearch}
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
                        <Button colorType="btnPrimary">
                            <LiaSearchSolid />
                        </Button>
                        {isSearchListOpened && (
                            <ul className={styles.searchResults}>
                                {searchedProducts.length ? (
                                    searchedProducts.map((product, index) => (
                                        <li key={index}>
                                            <figure
                                                className={styles.leftColumn}
                                            >
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
                                    <li className={styles.noResults}>
                                        No results found
                                    </li>
                                )}
                            </ul>
                        )}
                    </form>
                    <nav className={styles.mobileNav}>
                        <ul className={styles.mobileMenu}>
                            {navigation.map((navigationItem, index) => (
                                <li
                                    className={
                                        activeTabIndex === index
                                            ? styles.active
                                            : ""
                                    }
                                    key={index}
                                >
                                    <div className={styles.mainLinkWrapper}>
                                        {navigationItem.link ? (
                                            <Link
                                                href={navigationItem.link}
                                                className={styles.mainLink}
                                            >
                                                {navigationItem.title}
                                            </Link>
                                        ) : (
                                            <div className={styles.mainLink}>
                                                {navigationItem.title}
                                            </div>
                                        )}
                                        <button
                                            className={styles.menuBtn}
                                            onClick={() => onTabClick(index)}
                                        >
                                            <IoIosArrowDown
                                                className={
                                                    activeTabIndex === index
                                                        ? styles.reversed
                                                        : ""
                                                }
                                            />
                                        </button>
                                    </div>
                                    <div className={styles.sublinksWrapper}>
                                        <ul>
                                            {navigationItem.sublinks.map(
                                                (sublink, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            href={sublink.link}
                                                        >
                                                            <span>
                                                                {sublink.title}
                                                            </span>
                                                        </Link>
                                                    </li>
                                                )
                                            )}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Socials />
                </div>
            </div>
        </>
    );
};
