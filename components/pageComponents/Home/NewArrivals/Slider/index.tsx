"use client";

import SlickSlider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./styles.module.scss";
import { Product } from "./Product";
import { SliderProps } from "./slider.props";

const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;

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

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;

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

const sliderSettings = {
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
    return (
        <SlickSlider
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
