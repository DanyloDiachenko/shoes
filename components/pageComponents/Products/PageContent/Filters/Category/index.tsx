"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Chechbox } from "@/components/UI/Checkbox";

export const Category = () => {
    const [isOpened, setIsOpened] = useState(true);

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>
                <div
                    className={styles.top}
                    role="button"
                    aria-expanded="true"
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
                    <div className={styles.item}>
                        <Chechbox title="Category 1" id="cat-1" />
                        <span className={styles.count}>3</span>
                    </div>
                    <div className={styles.item}>
                        <Chechbox title="Category 2" id="cat-2" />
                        <span className={styles.count}>10</span>
                    </div>
                    <div className={styles.item}>
                        <Chechbox title="Category 3" id="cat-3" />
                        <span className={styles.count}>6</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
