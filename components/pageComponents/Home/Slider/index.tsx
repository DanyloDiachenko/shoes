"use client";

import SlickSlider from "react-slick";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import Link from "next/link";
import { Slide } from "./slide.interface";

const slides: Slide[] = [
    {
        subtitle: "Deals and Promotions",
        title: "Sneakers & Athletic Shoes",
        priceText: "from $9.99",
        button: {
            title: "SHOP NOW",
            url: "/products",
        },
        imageSrcs: {
            main: "/images/banners/slider-1.png",
            adaptive: "/images/banners/slide-1-480w.png",
        },
    },
    {
        subtitle: "",
        title: "",
        priceText: "",
        button: {
            title: "",
            url: "",
        },
        imageSrcs: {
            main: "",
            adaptive: "",
        },
    },
    {
        subtitle: "",
        title: "",
        priceText: "",
        button: {
            title: "",
            url: "",
        },
        imageSrcs: {
            main: "",
            adaptive: "",
        },
    },
];

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
                centerPadding={undefined}
                /* appendDots={() => <Dots />} */
            >
                <div className={styles.slide}>
                    <figure className={styles.figure}>
                        <picture>
                            <source
                                media="(max-width: 480px)"
                                srcSet="/images/banners/slide-2-480w.png"
                            />
                            <img
                                src="/images/banners/slider-2.png"
                                alt="Image Desc"
                            />
                        </picture>
                    </figure>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>Trending Now</h3>
                        <h1 className={styles.title}>
                            This Week's Most Wanted
                        </h1>
                        <div className={styles.price}>from $49.99</div>
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
                                srcSet="/images/banners/slide-3-480w.png"
                            />
                            <img
                                src="/images/banners/slider-3.png"
                                alt="Image Desc"
                            />
                        </picture>
                    </figure>
                    <div className={styles.content}>
                        <h3 className={styles.subtitle}>
                            Deals and Promotions
                        </h3>
                        <h1 className={styles.title}>Can’t-miss Clearance:</h1>
                        <div className={styles.price}>starting at 60% off</div>
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
