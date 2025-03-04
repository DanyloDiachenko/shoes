"use client";

import styles from "./styles.module.scss";
import { Product as ProductCard } from "./Product";
import { Tabs } from "../Tabs";
import { useState } from "react";
import { TabSlug } from "../Tabs/tabSlug.type";
import { Product } from "@/interfaces/entities/product.interface";
import { TopSellingProductsProps } from "./topSellingProducts.props";
import { ViewMore } from "./ViewMore";

export const TopSellingProducts = ({
    products,
    currency,
}: TopSellingProductsProps) => {
    const [activeTabSlug, setActiveTabSlug] = useState<TabSlug>("all");
    const [productsToShow, setProductsToShow] = useState<Product[]>(products);

    const filterProductsByGender = (tabSlug: TabSlug) => {
        switch (tabSlug) {
            case "all":
                setProductsToShow(products);
                break;
            case "men":
                setProductsToShow(
                    products.filter((product) =>
                        product.categories.some(
                            (category) => category.slug === "men"
                        )
                    )
                );
                break;
            case "women":
                setProductsToShow(
                    products.filter((product) =>
                        product.categories.some(
                            (category) => category.slug === "women"
                        )
                    )
                );
                break;
            default:
                setProductsToShow(products);
                break;
        }
    };

    const onSetActiveTabClick = (slug: TabSlug) => {
        setActiveTabSlug(slug);
        filterProductsByGender(slug);
    };

    return (
        <div className={`${styles.topSellingProducts} container`}>
            <div className={styles.heading}>
                <h2 className={styles.title}>Top Selling Products</h2>
                <Tabs
                    activeTabSlug={activeTabSlug}
                    onSetActiveTabClick={onSetActiveTabClick}
                />
            </div>
            <div className={styles.tabContent}>
                <div
                    className={styles.tabPane}
                    role="tabpanel"
                    aria-labelledby={`tab-${activeTabSlug}`}
                >
                    <div className={`${styles.row} row`}>
                        {productsToShow.map((product, index) => (
                            <div key={index} className={styles.column}>
                                <ProductCard {...product} currency={currency} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ViewMore />
        </div>
    );
};
