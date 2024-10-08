"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Checkbox } from "@/components/UI/Checkbox";
import { CategoriesProps } from "./categories.props";
import { ProductCategoryWithProductsQuantity } from "@/interfaces/product.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setCategories } from "@/store/slices/productsSettings";

export const Categories = ({ categories }: CategoriesProps) => {
    const [isOpened, setIsOpened] = useState(true);

    const dispatch = useDispatch();
    const selectedCategories = useSelector(
        (state: RootState) => state.products.filters.categories
    );

    const setSelectedCategoriesHandler = (
        categories: ProductCategoryWithProductsQuantity[]
    ) => {
        dispatch(setCategories(categories));
    };

    const onCategoryClick = (category: ProductCategoryWithProductsQuantity) => {
        const existingCategory = selectedCategories.find(
            (cat) => cat.id === category.id
        );

        if (existingCategory) {
            setSelectedCategoriesHandler(
                selectedCategories.filter((cat) => cat.id !== category.id)
            );
        } else {
            setSelectedCategoriesHandler([...selectedCategories, category]);
        }
    };

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
                    {categories.map((category) => (
                        <div className={styles.item} key={category.id}>
                            <Checkbox
                                title={category.title}
                                id={category.id}
                                checked={selectedCategories.includes(category)}
                                onChange={() => onCategoryClick(category)}
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
