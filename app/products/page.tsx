import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { ProductsPageContent } from "@/components/pageComponents/Products";
import { getProducts } from "../../api/products";
import { getCategories } from "../../api/categories";
import { getSizes } from "../../api/sizes";
import { getColors } from "../../api/colors";
import { getBrands } from "../../api/brands";
import { PageProps } from "@/.next/types/app/page";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { getCurrency } from "@/helpers/getCurrency";

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
    const currency = await getCurrency();
    const searchParamsFunc = await searchParams;

    const categorySlugs = searchParamsFunc.categories
        ? searchParamsFunc.categories.split(",")
        : undefined;
    const sizeSlugs = searchParamsFunc.sizes
        ? searchParamsFunc.sizes.split(",")
        : undefined;
    const brandSlugs = searchParamsFunc.brands
        ? searchParamsFunc.brands.split(",")
        : undefined;

    const pageNumber = Number(searchParamsFunc.page) || undefined;
    const sortBy = searchParamsFunc.sortBy || undefined;
    const color = searchParamsFunc.color || undefined;
    const priceFrom = searchParamsFunc.priceFrom || undefined;
    const priceTo = searchParamsFunc.priceTo || undefined;

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
