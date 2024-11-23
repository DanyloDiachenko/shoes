import { Slide } from "./slide.interface";

export const slides: Slide[] = [
    {
        subtitle: "Deals and Promotions",
        title: "Sneakers & Athletic Shoes",
        priceText: "from $9.99",
        button: {
            title: "SHOP NOW",
            link: "/products",
        },
        imageSrcs: {
            main: "/images/banners/slider-1.png",
            adaptive: "/images/banners/slide-1-480w.png",
        },
    },
    {
        subtitle: "Trending Now",
        title: "This Week's Most Wanted",
        priceText: "from $49.99",
        button: {
            title: "SHOP NOW",
            link: "/products",
        },
        imageSrcs: {
            main: "/images/banners/slider-2.png",
            adaptive: "/images/banners/slide-2-480w.png",
        },
    },
    {
        subtitle: "Deals and Promotions",
        title: "Can’t-miss Clearance:",
        priceText: "starting at 60% off",
        button: {
            title: "SHOP NOW",
            link: "/products",
        },
        imageSrcs: {
            main: "/images/banners/slider-3.png",
            adaptive: "/images/banners/slide-3-480w.png",
        },
    },
];