"use client";

import { useState } from "react";
import { NewArrivalsProps } from "./newArrivals.props";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";
import { Tabs } from "./Tabs";
import { TabSlug } from "./tabSlug.type";
import { Product } from "@/interfaces/product.interface";

export const NewArrivals = ({
    newArrivalProductsAll,
    newArrivalProductsMen,
    newArrivalProductsWomen,
    currency,
}: NewArrivalsProps) => {
    const [activeTabSlug, setActiveTabSlug] = useState<TabSlug>("all");
    const [productsToShow, setProductsToShow] = useState<Product[]>(
        newArrivalProductsAll
    );

    const filterProducts = (tabSlug: TabSlug) => {
        switch (tabSlug) {
            case "all": {
                setProductsToShow(newArrivalProductsAll);
                break;
            }
            case "men": {
                setProductsToShow(newArrivalProductsMen);
                break;
            }
            case "women": {
                setProductsToShow(newArrivalProductsWomen);
                break;
            }
            default: {
                setProductsToShow(newArrivalProductsAll);
                break;
            }
        }
    };

    const onSetActiveTabClick = (slug: TabSlug) => {
        setActiveTabSlug(slug);
        filterProducts(slug);
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
