import {
    Product,
    ProductCategory,
    ProductBrand,
    ProductSize,
    ProductColor,
} from "@/interfaces/product.interface";
import { getProducts } from "@/app/api/products";
import { getCategories } from "@/app/api/categories";
import { getBrands } from "@/app/api/brands";
import { getSizes } from "@/app/api/sizes";
import { getColors } from "@/app/api/colors";
import { NavigationItem } from "@/interfaces/navigationItem";

export const getNavigation = async (): Promise<NavigationItem[]> => {
    let bestsellers = (
        await getProducts({
            categorySlugs: ["bestsellers"],
        })
    ).data;
    let categories = await getCategories();
    let brands = await getBrands();
    let sizes = await getSizes();
    let colors = await getColors();

    return [
        {
            title: "Bestsellers",
            link: "/products",
            sublinks: bestsellers.map((product) => ({
                title: product.title,
                link: `/products/${product.id}`,
            })),
        },
        {
            title: "Categories",
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
            title: "Sizes",
            link: "/products",
            sublinks: sizes.map((size) => ({
                title: String(size.title),
                link: `/products?brands=${size.slug}`,
            })),
        },
        {
            title: "Colors",
            link: "/products",
            sublinks: colors.map((color) => ({
                title: color.title,
                link: `/products?color=${color.slug}`,
            })),
        },
    ];
};
