"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Checkbox } from "@/components/UI/Checkbox";
import { CategoryProps } from "./category.props";
import { IProductCategoryWithProductsQuantity } from "@/interfaces/product.interface";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setCategories } from "@/store/slices/products";

export const Category = ({ allCategories }: CategoryProps) => {
    const [isOpened, setIsOpened] = useState(true);

    const dispatch = useDispatch();
    const selectedCategories = useSelector(
        (state: RootState) => state.products.filters.categories
    );

    const setCategoriesHandler = (
        categories: IProductCategoryWithProductsQuantity[]
    ) => {
        dispatch(setCategories(categories));
    };

    const onCategoryClick = (
        category: IProductCategoryWithProductsQuantity
    ) => {
        const existingCategory = selectedCategories.find(
            (cat) => cat.id === category.id
        );

        if (existingCategory) {
            setCategoriesHandler(
                selectedCategories.filter((cat) => cat.id !== category.id)
            );
        } else {
            setCategoriesHandler([...selectedCategories, category]);
        }
    };

    console.log(selectedCategories);

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
