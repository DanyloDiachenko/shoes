"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Checkbox } from "@/components/UI/Checkbox";
import InputRange, { Range } from "react-input-range";
/* import "react-input-range/lib/css/index.css"; */

export const Price = () => {
    const [isOpened, setIsOpened] = useState(true);
    const [price, setPrice] = useState<Range>({ min: 0, max: 1000 });

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
                            Price Range:{" "}
                            <span>
                                ${price.min} - ${price.max}
                            </span>
                        </div>
                        <InputRange
                            value={price}
                            onChange={(newPrice) => setPrice(newPrice as Range)}
                            minValue={0}
                            maxValue={1000}
                            step={50}
                            formatLabel={(price) => `$${price}`}
                            classNames={{
                                track: styles.inputRangeTrack,
                                activeTrack: styles.inputRangeTrackActive,
                                disabledInputRange: styles.inputRangeDisabled,
                                inputRange: styles.inputRange,
                                labelContainer: styles.inputRangeLabelContainer,
                                maxLabel: styles.inputRangeLabelMax,
                                minLabel: styles.inputRangeLabelMin,
                                slider: styles.inputRangeSlider,
                                sliderContainer:
                                    styles.inputRangeSliderContainer,
                                valueLabel: styles.inputRangeLabelValue,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
