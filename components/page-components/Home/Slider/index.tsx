"use client";

import SlickSlider from "react-slick";
import styles from "./styles.module.scss";
import { Slide } from "./Slide";
import { SliderProps } from "./slider.props";
import { getSlides } from "./getSlides";

export const Slider = ({ currency }: SliderProps) => {
    const slides = getSlides(currency);

    return (
        <div className="container">
            <SlickSlider
                className={`${styles.slider} main-slider`}
                slidesToShow={1}
                dots={true}
                dotsClass={styles.dots}
                infinite={true}
                speed={400}
                autoplay
                autoplaySpeed={5000}
            >
                {slides.map((slide, index) => (
                    <Slide {...slide} key={index} />
                ))}
            </SlickSlider>
        </div>
    );
};
