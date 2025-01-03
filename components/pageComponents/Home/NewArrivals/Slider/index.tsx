import { LiaCartPlusSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { LiaBinocularsSolid } from "react-icons/lia";
import SlickSlider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { getProductRating } from "@/helpers/getProductRating";
import styles from "./styles.module.scss";
import Link from "next/link";
import { Product } from "./Product";

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

export const Slider = () => {
    return (
        <SlickSlider
            className={`${styles.slider} new-arrivals-slider`}
            aria-labelledby="new-all-link"
            {...sliderSettings}
        >
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </SlickSlider>
    );
};
