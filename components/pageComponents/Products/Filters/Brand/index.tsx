"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Checkbox } from "@/components/UI/Checkbox";

export const Brand = () => {
    const [isOpened, setIsOpened] = useState(true);

    return (
        <div className={styles.widget}>
            <h3 className={styles.title}>
                <div
                    className={styles.top}
                    role="button"
                    aria-expanded={isOpened}
                    aria-controls="widget-4"
                    onClick={() => setIsOpened(!isOpened)}
                >
                    <span>Brand</span>
                    <IoIosArrowDown />
                </div>
            </h3>
            <div
                className={`${styles.widgetContentWrapper} ${
                    isOpened ? styles.opened : ""
                }`}
                id="widget-4"
            >
                <div className={styles.widgetBody}>
                    <div className={styles.item}>
                        <Checkbox title="Brand 1" id="brand-1" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="Brand 2" id="brand-2" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="Brand 3" id="brand-3" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="Brand 4" id="brand-4" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="Brand 5" id="brand-5" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="Brand 6" id="brand-6" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="Brand 6" id="brand-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};
