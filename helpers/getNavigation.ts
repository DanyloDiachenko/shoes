import { getProducts } from "@/api/products";
import { getCategories } from "@/api/categories";
import { getBrands } from "@/api/brands";
import { getSizes } from "@/api/sizes";
import { getColors } from "@/api/colors";
import { NavigationItem } from "@/interfaces/navigationItem.interface";
import { Product } from "@/interfaces/entities/product.interface";

export const getNavigation = async (): Promise<NavigationItem[]> => {
    const bestsellersResponse = await getProducts({
        categorySlugs: ["bestsellers"],
    });
    let bestsellers: Product[] = [];
    if ("data" in bestsellersResponse) {
        bestsellers = bestsellersResponse.data;
    }
    let categories = await getCategories();
    let brands = await getBrands();
    let sizes = await getSizes();
    let colors = await getColors();

    return [
        {
            title: "Bestsellers",
            link: "/products?categories=bestsellers",
            sublinks: bestsellers.map((product) => ({
                title: product.title,
                link: `/products/${product.id}`,
            })),
        },
        {
            title: "Categories",
            sublinks: categories.map((category) => ({
                title: category.title,
                link: `/products?categories=${category.slug}`,
            })),
        },
        {
            title: "Brands",
            sublinks: brands.map((brand) => ({
                title: brand.title,
                link: `/products?brands=${brand.slug}`,
            })),
        },
        {
            title: "Sizes",
            sublinks: sizes.map((size) => ({
                title: String(size.title),
                link: `/products?brands=${size.slug}`,
            })),
        },
        {
            title: "Colors",
            sublinks: colors.map((color) => ({
                title: color.title,
                link: `/products?color=${color.slug}`,
            })),
        },
    ];
};
