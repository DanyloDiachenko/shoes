"use client";

import styles from "./styles.module.scss";
import Slider from "react-slick";
import { ProductSlide } from "./ProductSlide";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { YouMayAlsoLikeProps } from "./youMayAlsoLike.props";

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
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

export const YouMayAlsoLike = ({ products, currency }: YouMayAlsoLikeProps) => {
    return (
        <>
            <h2 className={styles.title}>You May Also Like</h2>
            <Slider className={`${styles.slider} may-like-slider`} {...sliderSettings}>
                {products.map((product, index) => (
                    <div key={index}>
                        <ProductSlide {...product} currency={currency} />
                    </div>
                ))}
            </Slider>
        </>
    );
};
