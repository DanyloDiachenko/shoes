"use client";

import { useState } from "react";
import { NewArrivalsProps } from "./newArrivals.props";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";
import { Tabs } from "./Tabs";
import { TabSlug } from "./tabSlug.type";

export const NewArrivals = ({ products }: NewArrivalsProps) => {
    const [activeTabSlug, setActiveTabSlug] = useState<TabSlug>("all");

    const filterProducts = (tabSlug: TabSlug) => {
        switch (tabSlug) {
            case "all": {
                return products;
            }
            case "men": {
                return products.filter((product) =>
                    product.categories.find(
                        (category) => category.slug === "men"
                    )
                );
            }
            case "women": {
                return products.filter((product) =>
                    product.categories.find(
                        (category) => category.slug === "women"
                    )
                );
            }
            default: {
                return products;
            }
        }
    };

    const onSetActiveTabClick = (slug: TabSlug) => {
        setActiveTabSlug(slug);
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
                    products={filterProducts(activeTabSlug)}
                />
            </div>
        </div>
    );
};
