"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { FaArrowRightLong } from "react-icons/fa6";
import { Product as ProductCart } from "./Product";
import { Tabs } from "../Tabs";
import { useState } from "react";
import { TabSlug } from "../NewArrivals/tabSlug.type";
import { Product } from "@/interfaces/product.interface";
import { TopSellingProductsProps } from "./topSellingProducts.props";

export const TopSellingProducts = ({ products }: TopSellingProductsProps) => {
    const [activeTabSlug, setActiveTabSlug] = useState<TabSlug>("all");
    const [productsToShow, setProductsToShow] = useState<Product[]>(products);

    const filterProducts = (tabSlug: TabSlug) => {
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
        filterProducts(slug);
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
                    id="top-all-tab"
                    role="tabpanel"
                    aria-labelledby="top-all-link"
                >
                    <div className={`${styles.row} row`}>
                        {productsToShow.map((product, index) => (
                            <div key={index} className={styles.column}>
                                <ProductCart {...product} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.moreContainer}>
                <Link href="/products">
                    <Button colorType="btnOutlinePrimary2">
                        <span>View more products</span>
                        <FaArrowRightLong />
                    </Button>
                </Link>
            </div>
        </div>
    );
};
