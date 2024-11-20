"use client";

import SlickSlider from "react-slick";
import styles from "./styles.module.scss";

export const Slider = () => {
    return (
        <div className="container">
            <SlickSlider className={styles.slider}>
                <div className="intro-slide">
                    <figure className="slide-image">
                        <picture>
                            <source
                                media="(max-width: 480px)"
                                srcSet="assets/images/demos/demo-10/slider/slide-1-480w.jpg"
                            />
                            <img
                                src="assets/images/demos/demo-10/slider/slide-1.jpg"
                                alt="Image Desc"
                            />
                        </picture>
                    </figure>

                    <div className="intro-content">
                        <h3 className="intro-subtitle">Deals and Promotions</h3>
                        <h1 className="intro-title text-white">
                            Sneakers & Athletic Shoes
                        </h1>

                        <div className="intro-price text-white">from $9.99</div>

                        <a
                            href="category.html"
                            className="btn btn-white-primary btn-round"
                        >
                            <span>SHOP NOW</span>
                            <i className="icon-long-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </SlickSlider>
        </div>
    );
};
