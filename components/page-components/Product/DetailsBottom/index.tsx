"use client";

import { useState } from "react";
import styles from "./styles.module.scss";
import { Reviews } from "./TabsContent/Reviews";
import { TabTitles } from "./TabTitles";
import { ProductDetailsTab } from "@/types/productDetailsTab.type";
import { ProductDetailsTabContent } from "@/interfaces/productDetailsTabContent.interface";
import { DetailsBottomProps } from "./detailsBottom.props";
import { ShippingReturns } from "./TabsContent/ShippingReturns";

export const DetailsBottom = ({ product }: DetailsBottomProps) => {
    const tabContent: ProductDetailsTabContent[] = [
        {
            key: "description",
            title: "Description",
            content: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: product.productInformation,
                    }}
                />
            ),
        },
        {
            key: "additionalInfo",
            title: "Additional information",
            content: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: product.additionalInformation,
                    }}
                />
            ),
        },
        {
            key: "shippingReturns",
            title: "Shipping & Returns",
            content: <ShippingReturns />,
        },
        {
            key: "reviews",
            title: `Reviews (${product.reviews.length})`,
            content: <Reviews reviews={product.reviews} />,
        },
    ];

    const [activeTab, setActiveTab] =
        useState<ProductDetailsTab>("description");
    const [isTransitioning, setIsTransitioning] = useState(false);

    const activeContent = tabContent.find(
        (tab) => tab.key === activeTab
    )?.content;

    const handleTabChange = (tab: ProductDetailsTab) => {
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
