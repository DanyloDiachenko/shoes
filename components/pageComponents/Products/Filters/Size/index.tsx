"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Checkbox } from "@/components/UI/Checkbox";

export const Size = () => {
    const [isOpened, setIsOpened] = useState(true);

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
                    <div className={styles.item}>
                        <Checkbox title="XS" id="size-1" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="S" id="size-2" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="M" id="size-3" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="L" id="size-4" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="XL" id="size-5" />
                    </div>
                    <div className={styles.item}>
                        <Checkbox title="XXL" id="size-6" />
                    </div>
                </div>
            </div>
        </div>
    );
};
