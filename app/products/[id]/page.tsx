import { PageProps } from "@/.next/types/app/products/[id]/page";
import { getProduct } from "@/app/api/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/pageComponents/Product";

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
        title: "Details",
        link: "#",
    },
];

const ProductDetails = async ({ params }: PageProps) => {
    const productId = params.id;
    const product = await getProduct(productId);

    return (
        <>
            <Breadcrumbs links={breadcrumbItems} />
            <ProductPageContent product={product} />
        </>
    );
};

export default ProductDetails;
