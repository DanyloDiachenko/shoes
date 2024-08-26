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
        slug: "sneakers",
        title: "Sneakers",
        productsQuantity: 120,
    },
    {
        id: "2",
        slug: "boots",
        title: "Boots",
        productsQuantity: 85,
    },
    {
        id: "3",
        slug: "sandals",
        title: "Sandals",
        productsQuantity: 60,
    },
    {
        id: "4",
        slug: "formal",
        title: "Formal Shoes",
        productsQuantity: 50,
    },
    {
        id: "5",
        slug: "casual",
        title: "Casual Shoes",
        productsQuantity: 90,
    },
    {
        id: "6",
        slug: "sports",
        title: "Sports Shoes",
        productsQuantity: 70,
    },
    {
        id: "7",
        slug: "kids",
        title: "Kids' Shoes",
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
