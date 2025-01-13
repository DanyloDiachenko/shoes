import { Slide } from "./slide.interface";
import { Currency } from "@/types/currency.type";

export const getSlides = (currency: Currency): Slide[] => {
    return [
        {
            subtitle: "Deals and Promotions",
            title: "Sneakers & Athletic Shoes",
            priceText: `from ${currency === "uah" ? "₴399.99" : "€9.99"}`,
            button: {
                title: "SHOP NOW",
                link: "/products?categories=sport",
            },
            imageSrcs: {
                main: "/images/banners/slider-1.png",
                adaptive: "/images/banners/slider-1-480w.png",
            },
        },
        {
            subtitle: "Trending Now",
            title: "This Week's Most Wanted",
            priceText: `from ${currency === "uah" ? "₴1999.99" : "€49.99"}`,
            button: {
                title: "SHOP NOW",
                link: "/products?categories=bestsellers",
            },
            imageSrcs: {
                main: "/images/banners/slider-2.png",
                adaptive: "/images/banners/slider-2-480w.png",
            },
        },
        {
            subtitle: "Deals and Promotions",
            title: "Can’t-miss Clearance:",
            priceText: "starting at 60% off",
            button: {
                title: "SHOP NOW",
                link: "/products?categories=discount",
            },
            imageSrcs: {
                main: "/images/banners/slider-3.png",
                adaptive: "/images/banners/slider-3-480w.png",
            },
        },
    ];
};
