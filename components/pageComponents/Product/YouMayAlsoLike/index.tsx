"use client";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ProductSlide } from "./ProductSlide";
import { ProductSlideProps } from "./ProductSlide/productSlide.props";

const swiperSettings = {
    spaceBetween: 20,
    loop: false,
    pagination: {
        clickable: true,
    },
    navigation: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        480: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1200: {
            slidesPerView: 4,
            navigation: true,
            pagination: false,
        },
    },
};

const products: ProductSlideProps[] = [
    {
        label: "New",
        labelType: "new",
        imageSrc: "/images/banners/product.png",
        productLink: "#",
        category: "Women",
        title: "Brown paperbag waist pencil skirt",
        price: "$60.00",
        rating: 4,
        reviews: 2,
        thumbs: [
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
        ],
    },
    {
        label: "Sale",
        labelType: "sale",
        imageSrc: "/images/banners/product.png",
        productLink: "#",
        category: "Men",
        title: "Blue denim jacket",
        price: "$120.00",
        rating: 5,
        reviews: 10,
        thumbs: [
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
        ],
    },
    {
        label: "New",
        labelType: "new",
        imageSrc: "/images/banners/product.png",
        productLink: "#",
        category: "Women",
        title: "Brown paperbag waist pencil skirt",
        price: "$60.00",
        rating: 4,
        reviews: 2,
        thumbs: [
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
        ],
    },
    {
        label: "Sale",
        labelType: "sale",
        imageSrc: "/images/banners/product.png",
        productLink: "#",
        category: "Men",
        title: "Blue denim jacket",
        price: "$120.00",
        rating: 5,
        reviews: 10,
        thumbs: [
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
        ],
    },
    {
        label: "New",
        labelType: "new",
        imageSrc: "/images/banners/product.png",
        productLink: "#",
        category: "Women",
        title: "Brown paperbag waist pencil skirt",
        price: "$60.00",
        rating: 4,
        reviews: 2,
        thumbs: [
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
        ],
    },
    {
        label: "Sale",
        labelType: "sale",
        imageSrc: "/images/banners/product.png",
        productLink: "#",
        category: "Men",
        title: "Blue denim jacket",
        price: "$120.00",
        rating: 5,
        reviews: 10,
        thumbs: [
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
            "/images/icons/product-1.png",
        ],
    },
];

export const YouMayAlsoLike = () => {
    return (
        <>
            <h2 className={styles.title}>You May Also Like</h2>
            <Swiper
                className={styles.swiper}
                modules={[Navigation, Pagination]}
                {...swiperSettings}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductSlide {...product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};
