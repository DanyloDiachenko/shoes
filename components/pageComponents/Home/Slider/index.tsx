"use client";

import SlickSlider from "react-slick";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import Link from "next/link";

export const Slider = () => {
    return (
        <div className="container">
            <SlickSlider
                className={styles.slider}
                slidesToShow={1}
                dots={true}
                dotsClass={styles.dots}
                infinite={true}
                speed={400}
                centerPadding={undefined}
            >
                <div className={styles.slide}>
                    <figure className={styles.figure}>
                        <picture>
                            <source
                                media="(max-width: 480px)"
                                srcSet="/images/banners/slider-1.png"
                            />
                            <img
                                src="/images/banners/slider-1.png"
                                alt="Image Desc"
                            />
                        </picture>
                    </figure>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>
                            Deals and Promotions
                        </h3>
                        <h1 className={styles.title}>
                            Sneakers & Athletic Shoes
                        </h1>
                        <div className={styles.price}>from $9.99</div>
                        <Link href="/products">
                            <Button colorType="btnOutlinePrimary2">
                                <span>SHOP NOW</span>
                                <i className="icon-long-arrow-right"></i>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.slide}>
                    <figure className={styles.figure}>
                        <picture>
                            <source
                                media="(max-width: 480px)"
                                srcSet="/images/banners/slider-1.png"
                            />
                            <img
                                src="/images/banners/slider-1.png"
                                alt="Image Desc"
                            />
                        </picture>
                    </figure>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>
                            Deals and Promotions
                        </h3>
                        <h1 className={styles.title}>
                            Sneakers & Athletic Shoes
                        </h1>
                        <div className={styles.price}>from $9.99</div>
                        <Link href="/products">
                            <Button colorType="btnOutlinePrimary2">
                                <span>SHOP NOW</span>
                                <i className="icon-long-arrow-right"></i>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.slide}>
                    <figure className={styles.figure}>
                        <picture>
                            <source
                                media="(max-width: 480px)"
                                srcSet="/images/banners/slider-1.png"
                            />
                            <img
                                src="/images/banners/slider-1.png"
                                alt="Image Desc"
                            />
                        </picture>
                    </figure>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>
                            Deals and Promotions
                        </h3>
                        <h1 className={styles.title}>
                            Sneakers & Athletic Shoes
                        </h1>
                        <div className={styles.price}>from $9.99</div>
                        <Link href="/products">
                            <Button colorType="btnOutlinePrimary2">
                                <span>SHOP NOW</span>
                                <i className="icon-long-arrow-right"></i>
                            </Button>
                        </Link>
                    </div>
                </div>
            </SlickSlider>
        </div>
    );
};
