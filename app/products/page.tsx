import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { ProductsPageContent } from "@/components/pageComponents/Products";
import { getProducts } from "../api/products";
import { getCategories } from "../api/categories";
import { getSizes } from "../api/sizes";

const Products = async ({ searchParams }: any) => {
    const page = Number(searchParams.page) || undefined;
    const categorySlugs = searchParams.categories
        ? searchParams.categories.split(",")
        : undefined;

    const productsResponse = await getProducts(page, 9, categorySlugs);
    const categoriesResponse = await getCategories();
    const sizesResponse = await getSizes();

    return (
        <>
            <PageHeader title="List" subtitle="Shop" />
            <Breadcrumbs />
            <ProductsPageContent
                productsResponse={productsResponse}
                categoriesResponse={categoriesResponse}
                sizesResponse={sizesResponse}
            />
        </>
    );
};

export default Products;
