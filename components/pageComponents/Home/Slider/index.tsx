"use client";

import SlickSlider from "react-slick";
import styles from "./styles.module.scss";
import { SLide } from "./Slide";
import { slides } from "./slides";

export const Slider = () => {
    return (
        <div className="container">
            <SlickSlider
                className={`${styles.slider} main-slider`}
                slidesToShow={1}
                dots={true}
                dotsClass={styles.dots}
                infinite={true}
                speed={400}
            >
                {slides.map((slide, index) => (
                    <SLide slide={slide} key={index} />
                ))}
            </SlickSlider>
        </div>
    );
};
