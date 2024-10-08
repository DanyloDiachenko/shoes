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
import { Currency } from "@/types/currency.type";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";

const breadcrumbs: Breadcrumb[] = [
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
    const currency = getServerCookie("currency") as Currency;

    const categorySlugs = searchParams.categories
        ? searchParams.categories.split(",")
        : undefined;
    const sizeSlugs = searchParams.sizes
        ? searchParams.sizes.split(",")
        : undefined;
    const brandSlugs = searchParams.brands
        ? searchParams.brands.split(",")
        : undefined;

    const pageNumber = Number(searchParams.page) || undefined;
    const sortBy = searchParams.sortBy || undefined;
    const color = searchParams.color || undefined;
    const priceFrom = searchParams.priceFrom || undefined;
    const priceTo = searchParams.priceTo || undefined;

    const [
        getProductsResponseServer,
        getCategoriesResponseServer,
        getSizesResponseServer,
        getColorsResponseServer,
        getBrandsResponseServer,
    ] = await Promise.all([
        getProducts({
            pageNumber,
            limit: 9,
            sortBy,
            categorySlugs,
            sizeSlugs,
            colorSlug: color,
            brandSlugs,
            currency,
            priceFrom,
            priceTo,
        }),
        getCategories(),
        getSizes(),
        getColors(),
        getBrands(),
    ]);

    return (
        <>
            <PageHeader title="List" subtitle="Shop" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ProductsPageContent
                getProductsResponseServer={getProductsResponseServer}
                getCategoriesResponseServer={getCategoriesResponseServer}
                getSizesResponseServer={getSizesResponseServer}
                getColorsResponseServer={getColorsResponseServer}
                getBrandsResponseServer={getBrandsResponseServer}
                currency={currency}
            />
        </>
    );
};

export default Products;
