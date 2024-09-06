import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { ProductsPageContent } from "@/components/pageComponents/Products";
import { getProducts } from "../api/products";
import { getCategories } from "../api/categories";
import { getSizes } from "../api/sizes";
import { getColors } from "../api/colors";
import { getBrands } from "../api/brands";

const Products = async ({ searchParams }: any) => {
    const page = Number(searchParams.page) || undefined;
    const categorySlugs = searchParams.categories
        ? searchParams.categories.split(",")
        : undefined;
    const sizeSlugs = searchParams.sizes ? searchParams.split(",") : undefined;
    const brandSlugs = searchParams.brands
        ? searchParams.split(",")
        : undefined;
    const sortBy = searchParams.sortBy || undefined;
    const color = searchParams.color || undefined;

    const productsResponse = await getProducts(
        page,
        9,
        sortBy,
        categorySlugs,
        sizeSlugs,
        color,
        brandSlugs
    );

    const categoriesResponse = await getCategories();
    const sizesResponse = await getSizes();
    const colorsResponse = await getColors();
    const brandsResponse = await getBrands();

    return (
        <>
            <PageHeader title="List" subtitle="Shop" />
            <Breadcrumbs />
            <ProductsPageContent
                productsResponse={productsResponse}
                categoriesResponse={categoriesResponse}
                sizesResponse={sizesResponse}
                colorsResponse={colorsResponse}
                brandsResponse={brandsResponse}
            />
        </>
    );
};

export default Products;
