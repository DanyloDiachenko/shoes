import Link from "next/link";
import styles from "./styles.module.scss";
import { CustomCategory } from "./customCategory.interface";
import { getCategories } from "@/app/api/categories";

export const Categories = async () => {
    const categories = await getCategories();

    const customCategories: CustomCategory[] = [
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
            link: "/products?categories=kids",
            productsQuantity:
                categories.find((category) => category.title === "Kids")
                    ?.productsQuantity || 0,
            image: "/images/banners/category-kids.png",
        },
    ];

    return (
        <div className={`${styles.categories} container`}>
            <div className={`${styles.row} row`}>
                {customCategories.map((category, index) => (
                    <div className={styles.column} key={index}>
                        <div className={styles.banner}>
                            <Link href="#">
                                <img src={category.image} alt="Banner" />
                            </Link>
                            <div className={styles.bannerContent}>
                                <h3 className={styles.bannerTitle}>
                                    {category.title}
                                </h3>
                                <h4 className={styles.bannerSubtitle}>
                                    {category.productsQuantity} Products
                                </h4>
                                <Link
                                    href={category.link}
                                    className={styles.bannerLink}
                                >
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
