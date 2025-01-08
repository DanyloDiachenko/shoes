import Link from "next/link";
import { headerNavigation } from "@/data/headerNavigation";
import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";
import { MobileMenuButton } from "./MobileMenuButton";
import { getCategories } from "@/app/api/categories";
import {
    Product,
    ProductBrand,
    ProductCategory,
    ProductColor,
    ProductSize,
} from "@/interfaces/product.interface";
import { getProducts } from "@/app/api/products";
import { getCurrency } from "@/helpers/getCurrency";
import { getBrands } from "@/app/api/brands";
import { getSizes } from "@/app/api/sizes";
import { getColors } from "@/app/api/colors";

export const Left = async () => {
    const currency = await getCurrency();

    let bestsellers: Product[] = [];
    let categories: ProductCategory[] = [];
    let brands: ProductBrand[] = [];
    let sizes: ProductSize[] = [];
    let colors: ProductColor[] = [];

    bestsellers = (
        await getProducts({
            categorySlugs: ["bestsellers"],
            currency,
        })
    ).data;
    categories = await getCategories();
    brands = await getBrands();
    sizes = await getSizes();
    colors = await getColors();

    export const headerNavigation: HeaderNavigationItem[] = [
        {
            title: "Bestsellers",
            link: "/products",
            sublinks: bestsellers.map((product) => ({
                title: product.title,
                link: `/products/${product.id}`,
            })),
        },
        {
            title: "Category",
            link: "/products",
            sublinks: categories.map((category) => ({
                title: category.title,
                link: `/products?categories=${category.slug}`,
            })),
        },
        {
            title: "Brands",
            link: "/products",
            sublinks: brands.map((brand) => ({
                title: brand.title,
                link: `/products?brands=${brand.slug}`,
            })),
        },
        {
            title: "Size",
            link: "/products",
            sublinks: [
                {
                    title: "XS",
                    link: "/products?size=xs",
                },
                {
                    title: "S",
                    link: "/products?size=s",
                },
                {
                    title: "M",
                    link: "/products?size=m",
                },
                {
                    title: "L",
                    link: "/products?size=l",
                },
                {
                    title: "XL",
                    link: "/products?size=xl",
                },
                {
                    title: "XXL",
                    link: "/products?size=xxl",
                },
            ],
        },
        {
            title: "Colour",
            link: "/products",
            sublinks: [
                {
                    title: "Brown",
                    link: "/products?color=brown",
                },
                {
                    title: "Yellow",
                    link: "/products?color=yellow",
                },
                {
                    title: "Black",
                    link: "/products?color=black",
                },
                {
                    title: "Red",
                    link: "/products?color=red",
                },
                {
                    title: "Blue",
                    link: "/products?color=blue",
                },
                {
                    title: "Green",
                    link: "/products?color=green",
                },
                {
                    title: "Pink",
                    link: "/products?color=pink",
                },
                {
                    title: "White",
                    link: "/products?color=white",
                },
            ],
        },
    ];

    return (
        <div className={styles.headerLeft}>
            <MobileMenuButton />
            <Link href="/" className={styles.logo}>
                <img
                    src="/images/icons/logo.png"
                    alt="Molla Logo"
                    width="105"
                    height="25"
                />
            </Link>
            <nav className={styles.mainNav}>
                <ul className={styles.menu}>
                    {headerNavigation.map((item, index) => (
                        <li key={index} className={styles.linksWrapper}>
                            <Link href={item.link} className={styles.mainLink}>
                                {item.title} <IoIosArrowDown />
                            </Link>
                            <ul className={styles.sublinks}>
                                {item.sublinks.map((sublink, index) => (
                                    <li key={index}>
                                        <Link href={sublink.link}>
                                            {sublink.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};
