"use client";

import styles from "./styles.module.scss";
import SlickSlider from "react-slick";
import { TestimonialSlide } from "./TestimonialSlide";
import { testimonials } from "@/data/testimonials";

export const WhatCustomersSay = () => {
    return (
        <div className={styles.whatCustomersSay}>
            <div className="container">
                <h2 className={styles.title}>What Customer Say About Us</h2>
                <SlickSlider
                    className={`${styles.slider} customers-slider`}
                    slidesToShow={1}
                    dots={true}
                    dotsClass={styles.dots}
                    infinite={false}
                    speed={400}
                >
                    {testimonials.map((testimonial, index) => (
                        <TestimonialSlide key={index} {...testimonial} />
                    ))}
                </SlickSlider>
            </div>
        </div>
    );
};
