import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { ProductsPageContent } from "@/components/pageComponents/Products";
import { getProducts } from "../api/products";
import { getCategories } from "../api/categories";
import { getSizes } from "../api/sizes";
import { getColors } from "../api/colors";
import { getBrands } from "../api/brands";
import { PageProps } from "@/.next/types/app/page";
import { getServerCookie } from "@/helpers/getServerCookie";
import { CurrencyType } from "@/types/currency.type";

const breadcrumbItems = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Shop",
        link: "/products",
    },
    {
        title: "List",
        link: "#",
    },
];

const Products = async ({ searchParams }: PageProps) => {
    const currency = getServerCookie("currency") as CurrencyType;

    const categorySlugs = searchParams.categories
        ? searchParams.categories.split(",")
        : undefined;
    const sizeSlugs = searchParams.sizes
        ? searchParams.sizes.split(",")
        : undefined;
    const brandSlugs = searchParams.brands
        ? searchParams.brands.split(",")
        : undefined;

    const page = Number(searchParams.page) || undefined;
    const sortBy = searchParams.sortBy || undefined;
    const color = searchParams.color || undefined;
    const priceFrom = searchParams.priceFrom || undefined;
    const priceTo = searchParams.priceTo || undefined;

    const productsResponse = await getProducts(
        page,
        9,
        sortBy,
        categorySlugs,
        sizeSlugs,
        color,
        brandSlugs,
        currency,
        priceFrom,
        priceTo
    );

    const categoriesResponse = await getCategories();
    const sizesResponse = await getSizes();
    const colorsResponse = await getColors();
    const brandsResponse = await getBrands();

    return (
        <>
            <PageHeader title="List" subtitle="Shop" />
            <Breadcrumbs links={breadcrumbItems} />
            <ProductsPageContent
                productsResponse={productsResponse}
                categoriesResponse={categoriesResponse}
                sizesResponse={sizesResponse}
                colorsResponse={colorsResponse}
                brandsResponse={brandsResponse}
                serverCurrency={currency}
            />
        </>
    );
};

export default Products;
