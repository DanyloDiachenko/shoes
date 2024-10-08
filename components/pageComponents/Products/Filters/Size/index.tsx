"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Checkbox } from "@/components/UI/Checkbox";
import { SizeProps } from "./sizes.props";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { ProductSize } from "@/interfaces/product.interface";
import { setSizes } from "@/store/slices/productsSettings";

export const Size = ({ sizes }: SizeProps) => {
    const [isOpened, setIsOpened] = useState(true);

    const dispatch = useDispatch();
    const selectedSizes = useSelector(
        (state: RootState) => state.productsSettings.filters.sizes
    );

    const setSizesHandler = (sizes: ProductSize[]) => {
        dispatch(setSizes(sizes));
    };

    const onSizeClick = (size: ProductSize) => {
        const existingSize = selectedSizes.find(
            (selectedSize) => selectedSize.id === size.id
        );

        if (existingSize) {
            setSizesHandler(
                selectedSizes.filter(
                    (selectedSize) => selectedSize.id !== size.id
                )
            );
        } else {
            setSizesHandler([...selectedSizes, size]);
        }
    };

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>
                <div
                    className={styles.top}
                    role="button"
                    aria-expanded={isOpened}
                    aria-controls="widget-2"
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <span>Size</span>
                    <IoIosArrowDown />
                </div>
            </h3>
            <div
                className={`${styles.widgetContentWrapper} ${
                    isOpened ? styles.opened : ""
                }`}
                id="widget-2"
            >
                <div className={styles.widgetBody}>
                    {sizes.map((size) => (
                        <div className={styles.item} key={size.id}>
                            <Checkbox
                                title={String(size.slug)}
                                id={size.id}
                                checked={selectedSizes.includes(size)}
                                onChange={() => onSizeClick(size)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
