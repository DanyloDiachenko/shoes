"use client";

import { useState } from "react";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Colour } from "./Colour";
import { Price } from "./Price";
import { Size } from "./Size";
import styles from "./styles.module.scss";
import { IProductCategory } from "@/interfaces/product.interface";
import { IFilters } from "./filters.interface";

const categories: IProductCategory[] = [
    {
        id: "1",
        key: "sneakers",
        label: "Sneakers",
        productsQuantity: 120,
    },
    {
        id: "2",
        key: "boots",
        label: "Boots",
        productsQuantity: 85,
    },
    {
        id: "3",
        key: "sandals",
        label: "Sandals",
        productsQuantity: 60,
    },
    {
        id: "4",
        key: "formal",
        label: "Formal Shoes",
        productsQuantity: 50,
    },
    {
        id: "5",
        key: "casual",
        label: "Casual Shoes",
        productsQuantity: 90,
    },
    {
        id: "6",
        key: "sports",
        label: "Sports Shoes",
        productsQuantity: 70,
    },
    {
        id: "7",
        key: "kids",
        label: "Kids' Shoes",
        productsQuantity: 40,
    },
];

export const Filters = () => {
    const [filters, setFilters] = useState<IFilters>({
        categories: [],
        sizes: [],
        colour: null,
        brands: [],
        priceFrom: 0,
        priceTo: 1000,
    });

    const onCategoryClick = (category: IProductCategory) => {
        const existingCategory = filters.categories.find(
            (cat) => cat.id === category.id
        );

        if (existingCategory) {
            setFilters({
                ...filters,
                categories: filters.categories.filter(
                    (filterCategory) => filterCategory.id !== category.id
                ),
            });
        } else {
            setFilters({
                ...filters,
                categories: [...filters.categories, category],
            });

            /* fetch() */
        }
    };

    return (
        <aside className={styles.column}>
            <div className={styles.sidebar}>
                <div className={styles.widgetClean}>
                    <label>Filters:</label>
                    <a href="#" className={styles.clear}>
                        Clean All
                    </a>
                </div>
                <Category
                    allCategories={categories}
                    selectedCategories={filters.categories}
                    onCategoryClick={onCategoryClick}
                />
                <Size />
                <Colour />
                <Brand />
                <Price />
            </div>
        </aside>
    );
};
