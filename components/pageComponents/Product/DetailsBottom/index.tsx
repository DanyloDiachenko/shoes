"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { AdditionalInfo } from "./TabsContent/AdditionalInfo";
import { Description } from "./TabsContent/Description";
import { Reviews } from "./TabsContent/Reviews";
import { ShippingReturns } from "./TabsContent/ShippingReturns";
import { TabTitles } from "./TabTitles";
import { ProductDetailsTabType } from "@/types/productDetailsTab.type";
import { IProductDetailsTabContent } from "@/interfaces/productDetailsTabContent.interface";

const tabContent: IProductDetailsTabContent[] = [
    {
        key: "description",
        title: "Description",
        content: <Description />,
    },
    {
        key: "additionalInfo",
        title: "Additional information",
        content: <AdditionalInfo />,
    },
    {
        key: "shippingReturns",
        title: "Shipping & Returns",
        content: <ShippingReturns />,
    },
    {
        key: "reviews",
        title: "Reviews (2)",
        content: <Reviews />,
    },
];

export const DetailsBottom = () => {
    const [activeTab, setActiveTab] =
        useState<ProductDetailsTabType>("description");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const activeContent = tabContent.find(
        (tab) => tab.key === activeTab
    )?.content;

    const handleTabChange = (tab: ProductDetailsTabType) => {
        if (tab !== activeTab) {
            setIsTransitioning(true);
            
            setTimeout(() => {
                setActiveTab(tab);
                setIsTransitioning(false);
            }, 150);
        }
    };

    return (
        <div className={styles.tabsWrapper}>
            <TabTitles
                activeTab={activeTab}
                setActiveTab={handleTabChange}
                tabs={tabContent}
            />
            <div className={styles.tabContent}>
                <div
                    className={`${styles.tabPanel} ${
                        isTransitioning ? styles.transitioning : styles.active
                    }`}
                    role="tabpanel"
                    aria-labelledby={`${activeTab}-link`}
                >
                    {activeContent}
                </div>
            </div>
        </div>
    );
};
