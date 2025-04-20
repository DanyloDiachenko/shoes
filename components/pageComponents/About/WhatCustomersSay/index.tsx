"use client";

import styles from "./styles.module.scss";
import SlickSlider from "react-slick";
import { TestimonialSlide } from "./TestimonialSlide";
import { testimonials } from "@/data/testimonials";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { RefObject, useRef } from "react";

const NextArrow = ({ slider }: { slider: RefObject<SlickSlider> }) => {
    return (
        <button
            className={`${styles.arrowButton} ${styles.nextArrow}`}
            onClick={() => {
                slider.current?.slickNext();
            }}
            name="next"
            aria-label="Go to next review"
        >
            <MdArrowForwardIos size={28} />
        </button>
    );
};

const PrevArrow = ({ slider }: { slider: RefObject<SlickSlider> }) => {
    return (
        <button
            className={`${styles.arrowButton} ${styles.prevArrow}`}
            onClick={() => {
                slider.current?.slickPrev();
            }}
            name="prev"
            aria-label="Go to previous review"
        >
            <MdArrowBackIosNew size={28} />
        </button>
    );
};

export const WhatCustomersSay = () => {
    const slider = useRef<SlickSlider>(null);

    return (
        <div className={styles.whatCustomersSay}>
            <div className="container">
                <h2 className={styles.title}>What Customer Say About Us</h2>
                <SlickSlider
                    ref={slider}
                    className={`${styles.slider} customers-slider`}
                    slidesToShow={1}
                    dots={true}
                    dotsClass={styles.dots}
                    infinite={false}
                    speed={400}
                    arrows={true}
                    nextArrow={
                        <NextArrow slider={slider as RefObject<SlickSlider>} />
                    }
                    prevArrow={
                        <PrevArrow slider={slider as RefObject<SlickSlider>} />
                    }
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialSlide key={index} {...testimonial} />
                    ))}
                </SlickSlider>
            </div>
        </div>
    );
};
