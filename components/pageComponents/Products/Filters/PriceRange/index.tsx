"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useState } from "react";
import InputRange, { Range } from "react-input-range";
import { useDispatch } from "react-redux";
import { setPriceEur, setPriceUah } from "@/store/slices/products";
import { PriceRangeProps } from "./priceRange.props";

export const PriceRange = ({ currency }: PriceRangeProps) => {
    const [isOpened, setIsOpened] = useState(true);
    const [visiblePriceRange, setVisiblePriceRange] = useState<Range>({
        min: 0,
        max: currency === "uah" ? 10000 : 1000,
    });

    const dispatch = useDispatch();

    const setPriceRangeHandler = (price: Range) => {
        if (currency === "uah") {
            dispatch(setPriceUah(price));
        }
        if (currency === "eur") {
            dispatch(setPriceEur(price));
        }
    };

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
                                {currency === "uah" ? "₴" : "€"}
                                {visiblePriceRange.min} -{" "}
                                {currency === "uah" ? "₴" : "€"}
                                {visiblePriceRange.max}
                            </span>
                        </div>
                        <InputRange
                            value={visiblePriceRange}
                            onChangeComplete={(newPrice) =>
                                setPriceRangeHandler(newPrice as Range)
                            }
                            onChange={(newPrice) =>
                                setVisiblePriceRange(newPrice as Range)
                            }
                            minValue={0}
                            maxValue={currency === "uah" ? 10000 : 1000}
                            step={currency === "uah" ? 100 : 5}
                            formatLabel={(price) =>
                                `${currency === "uah" ? "₴" : "€"}${price}`
                            }
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
