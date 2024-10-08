"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { ColorsProps } from "./colors.props";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductColor } from "@/interfaces/product.interface";
import { setColor } from "@/store/slices/products";

export const Colors = ({ allColors }: ColorsProps) => {
    const [isOpened, setIsOpened] = useState(true);

    const dispatch = useDispatch();
    const selectedColor = useSelector(
        (state: RootState) => state.products.filters.color
    );

    const setColorHandler = (color: ProductColor | null) => {
        dispatch(setColor(color));
    };

    const onColorClick = (color: ProductColor) => {
        if (selectedColor?.id === color.id) {
            setColorHandler(null);
        } else {
            setColorHandler(color);
        }
    };

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>
                <div
                    className={styles.top}
                    role="button"
                    aria-expanded={isOpened}
                    aria-controls="widget-3"
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <span>Color</span>
                    <IoIosArrowDown />
                </div>
            </h3>
            <div
                className={`${styles.widgetContentWrapper} ${
                    isOpened ? styles.opened : ""
                }`}
                id="widget-3"
            >
                <div className={styles.widgetBody}>
                    <div className={styles.filterColors}>
                        {allColors.map((color) => (
                            <div
                                className={
                                    selectedColor?.id === color.id
                                        ? styles.selected
                                        : ""
                                }
                                style={{ background: color.hexCode }}
                                onClick={() => onColorClick(color)}
                            >
                                <span className="sr-only">{color.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
