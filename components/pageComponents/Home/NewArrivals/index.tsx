"use client";

import { useState } from "react";
import { NewArrivalsProps } from "./newArrivals.props";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";
import { Tabs } from "./Tabs";

export const NewArrivals = ({ products }: NewArrivalsProps) => {
    const [activeTabSlug, setActiveTabSlug] = useState("all");

    return (
        <div className={styles.newArrivals}>
            <div className="container">
                <div className={styles.heading}>
                    <h2 className={styles.title}>New Arrivals</h2>
                    <Tabs
                        activeTabSlug={activeTabSlug}
                        setActiveTabSlug={setActiveTabSlug}
                    />
                </div>
                <Slider activeTabSlug={activeTabSlug} products={products} />
            </div>
        </div>
    );
};
