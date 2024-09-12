"use client";

import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import InputRange, { Range } from "react-input-range";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setPriceEur, setPriceUah } from "@/store/slices/products";
import { CurrencyType } from "@/types/currency.type";
import { getClientCookie } from "@/helpers/getClientCookie";
import { PriceProps } from "./price.props";

export const Price = ({ serverCurrency }: PriceProps) => {
    const [isOpened, setIsOpened] = useState(true);
    const [priceVisible, setPriceVisible] = useState<Range>({
        min: 0,
        max: serverCurrency === "uah" ? 10000 : 1000,
    });

    const dispatch = useDispatch();

    const setPriceHandler = (price: Range) => {
        if (serverCurrency === "uah") {
            dispatch(setPriceUah(price));
        }
        if (serverCurrency === "eur") {
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
                                {serverCurrency === "uah" ? "₴" : "€"}
                                {priceVisible.min} -{" "}
                                {serverCurrency === "uah" ? "₴" : "€"}
                                {priceVisible.max}
                            </span>
                        </div>
                        <InputRange
                            value={priceVisible}
                            onChangeComplete={(newPrice) =>
                                setPriceHandler(newPrice as Range)
                            }
                            onChange={(newPrice) =>
                                setPriceVisible(newPrice as Range)
                            }
                            minValue={0}
                            maxValue={serverCurrency === "uah" ? 10000 : 1000}
                            step={serverCurrency === "uah" ? 100 : 5}
                            formatLabel={(price) =>
                                `${
                                    serverCurrency === "uah" ? "₴" : "€"
                                }${price}`
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
