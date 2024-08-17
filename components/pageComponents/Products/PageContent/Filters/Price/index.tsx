"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Checkbox } from "@/components/UI/Checkbox";

export const Price = () => {
    const [isOpened, setIsOpened] = useState(true);

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>
                <div
                    className={styles.top}
                    role="button"
                    aria-expanded={isOpened}
                    aria-controls="widget-5"
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <span>Price</span>
                    <IoIosArrowDown />
                </div>
            </h3>
            <div
                className={`${styles.widgetContentWrapper} ${
                    isOpened ? styles.opened : ""
                }`}
                id="widget-5"
            >
                <div className={styles.widgetBody}>
                    <div className={styles.filterPrice}>
                        <div className={styles.text}>
                            Price Range: <span>$0 - $600</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
