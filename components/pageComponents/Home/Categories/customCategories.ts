import { getCategories } from "@/app/api/categories";
import { CustomCategory } from "./customCategory.interface";

const categories = await getCategories();

export const customCategories: CustomCategory[] = [
    {
        title: "Women's",
        link: "/products?categories=women",
        productsQuantity:
            categories.find((category) => category.title === "Women")
                ?.productsQuantity || 0,
        image: "/images/banners/category-women.png",
    },
    {
        title: "Men's",
        link: "/products?categories=men",
        productsQuantity:
            categories.find((category) => category.title === "Men")
                ?.productsQuantity || 0,
        image: "/images/banners/category-men.png",
    },
    {
        title: "Kid's",
        link: "/products?categories=kid",
        productsQuantity:
            categories.find((category) => category.title === "Kids")
                ?.productsQuantity || 0,
        image: "/images/banners/category-kids.png",
    },
];
