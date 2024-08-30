"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Checkbox } from "@/components/UI/Checkbox";
import { CategoryProps } from "./category.props";
import { IProductCategory } from "@/interfaces/product.interface";

export const Category = ({
    allCategories,
    onCategoryClick,
    selectedCategories,
}: CategoryProps) => {
    const [isOpened, setIsOpened] = useState(true);

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>
                <div
                    className={styles.top}
                    role="button"
                    aria-expanded={isOpened}
                    aria-controls="widget-1"
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <span>Category</span>
                    <IoIosArrowDown />
                </div>
            </h3>
            <div
                className={`${styles.widgetContentWrapper} ${
                    isOpened ? styles.opened : ""
                }`}
                id="widget-1"
            >
                <div className={styles.widgetBody}>
                    {allCategories.map((category) => (
                        <div className={styles.item} key={category.id}>
                            <Checkbox
                                title={category.title}
                                id={category.id}
                                checked={selectedCategories.includes(category)}
                                onClick={() => onCategoryClick(category)}
                                onChange={() => {}}
                            />
                            <span className={styles.count}>
                                {category.productsQuantity}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
