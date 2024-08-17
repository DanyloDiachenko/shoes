"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";

export const Colour = () => {
    const [isOpened, setIsOpened] = useState(true);

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
                        <a href="#" style={{ background: "#b87145" }}>
                            <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#f0c04a" }}>
                            <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#333333" }}>
                            <span className="sr-only">Color Name</span>
                        </a>
                        <a
                            href="#"
                            className={styles.selected}
                            style={{ background: "#cc3333" }}
                        >
                            <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#3399cc" }}>
                            <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#669933" }}>
                            <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#f2719c" }}>
                            <span className="sr-only">Color Name</span>
                        </a>
                        <a href="#" style={{ background: "#ebebeb" }}>
                            <span className="sr-only">Color Name</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
