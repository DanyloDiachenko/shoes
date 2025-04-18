"use client";

import { useState } from "react";
import { NewArrivalsProps } from "./newArrivals.props";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";
import { Tabs } from "../Tabs";
import { TabSlug } from "../Tabs/tabSlug.type";
import { Product } from "@/interfaces/entities/product.interface";

export const NewArrivals = ({ products, currency }: NewArrivalsProps) => {
    const [activeTabSlug, setActiveTabSlug] = useState<TabSlug>("all");
    const [productsToShow, setProductsToShow] = useState<Product[]>(products);

    const filterProductsByGender = (tabSlug: TabSlug) => {
        switch (tabSlug) {
            case "all": {
                setProductsToShow(products);

                break;
            }
            case "men": {
                const menProducts = products.filter((product) =>
                    product.categories.find(
                        (category) => category.slug === "men"
                    )
                );
                setProductsToShow(menProducts);

                break;
            }
            case "women": {
                const womenProducts = products.filter((product) =>
                    product.categories.find(
                        (category) => category.slug === "women"
                    )
                );
                setProductsToShow(womenProducts);

                break;
            }
            default: {
                setProductsToShow(products);

                break;
            }
        }
    };

    const onSetActiveTabClick = (slug: TabSlug) => {
        setActiveTabSlug(slug);
        filterProductsByGender(slug);
    };

    return (
        <div className={styles.newArrivals}>
            <div className="container">
                <div className={styles.heading}>
                    <h2 className={styles.title}>New Arrivals</h2>
                    <Tabs
                        activeTabSlug={activeTabSlug}
                        onSetActiveTabClick={onSetActiveTabClick}
                    />
                </div>
                <Slider
                    activeTabSlug={activeTabSlug}
                    products={productsToShow}
                    currency={currency}
                />
            </div>
        </div>
    );
};
