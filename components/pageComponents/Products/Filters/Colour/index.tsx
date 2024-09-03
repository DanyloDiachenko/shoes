"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { ColorProps } from "./colour.props";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { IProductColor } from "@/interfaces/product.interface";
import { setColour } from "@/store/slices/products";

export const Colour = ({ allColors }: ColorProps) => {
    const [isOpened, setIsOpened] = useState(true);

    const dispatch = useDispatch();
    const selectedColor = useSelector(
        (state: RootState) => state.products.filters.colour
    );

    const setColorHandler = (colour: IProductColor | null) => {
        dispatch(setColour(colour));
    };

    const onColourClick = (colour: IProductColor) => {
        if (selectedColor?.id === colour.id) {
            setColorHandler(null);
        } else {
            setColorHandler(colour);
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
                    <span>Colour</span>
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
                        {allColors.map((colour) => (
                            <div
                                className={
                                    selectedColor?.id === colour.id
                                        ? styles.selected
                                        : ""
                                }
                                style={{ background: colour.hexCode }}
                                onClick={() => onColourClick(colour)}
                            >
                                <span className="sr-only">{colour.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
