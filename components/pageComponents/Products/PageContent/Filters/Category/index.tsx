"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";

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
                        <div className={styles.customControl}>
                            <input
                                type="checkbox"
                                className={styles.customControlInput}
                                id="cat-1"
                            />
                            <label
                                className={styles.customControlLabel}
                                htmlFor="cat-1"
                            >
                                Dresses
                            </label>
                        </div>
                        <span className={styles.count}>3</span>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.customControl}>
                            <input
                                type="checkbox"
                                className={styles.customControlInput}
                                id="cat-2"
                            />
                            <label
                                className={styles.customControlLabel}
                                htmlFor="cat-2"
                            >
                                Abcsdad
                            </label>
                        </div>
                        <span className={styles.count}>10</span>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.customControl}>
                            <input
                                type="checkbox"
                                className={styles.customControlInput}
                                id="cat-3"
                            />
                            <label
                                className={styles.customControlLabel}
                                htmlFor="cat-3"
                            >
                                ds fdsfsdf
                            </label>
                        </div>
                        <span className={styles.count}>6</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
