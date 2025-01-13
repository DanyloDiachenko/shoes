"use client";

import SlickSlider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.scss";
import { Product } from "./Product";
import { SliderProps } from "./slider.props";
import { CSSProperties, useEffect, useRef } from "react";
import type { Settings as SliderSettings } from "react-slick";

interface ArrowProps {
    className?: string;
    style?: CSSProperties;
    onClick?: () => void;
}

const SampleNextArrow = ({ className, style, onClick }: ArrowProps) => {
    return (
        <div
            className={`${className} ${styles.arrowNext}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <IoIosArrowForward />
        </div>
    );
};

const SamplePrevArrow = ({ className, style, onClick }: ArrowProps) => {
    return (
        <div
            className={`${className} ${styles.arrowPrev}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <IoIosArrowBack />
        </div>
    );
};

const sliderSettings: SliderSettings = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    dotsClass: styles.dots,
    responsive: [
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
        {
            breakpoint: 1280,
            settings: {
                arrows: false,
            },
        },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

export const Slider = ({ activeTabSlug, products, currency }: SliderProps) => {
    const sliderRef = useRef<SlickSlider>(null);

    useEffect(() => {
        sliderRef.current?.slickGoTo(0);
    }, [products]);

    return (
        <SlickSlider
            ref={sliderRef}
            key={products.length}
            className={`${styles.slider} new-arrivals-slider`}
            aria-labelledby={`new-${activeTabSlug}-link`}
            {...sliderSettings}
        >
            {products.map((product, index) => (
                <Product key={index} {...product} currency={currency} />
            ))}
        </SlickSlider>
    );
};
