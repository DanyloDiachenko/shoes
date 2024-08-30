import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { ProductsPageContent } from "@/components/pageComponents/Products";
import { getProducts } from "../api/products";

const Products = async () => {
    const productsResponse = await getProducts(1);

    return (
        <>
            <PageHeader title="List" subtitle="Shop" />
            <Breadcrumbs />
            <ProductsPageContent productsResponse={productsResponse} />
        </>
    );
};

export default Products;
