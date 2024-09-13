import { PageProps } from "@/.next/types/app/products/[id]/page";
import { getProduct } from "@/app/api/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/pageComponents/Product";

const links = [
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
        link: "/products",
    },
];

const ProductDetails = async ({ params }: PageProps) => {
    const productId = params.id;
    const product = await getProduct(productId);

    return (
        <>
            <Breadcrumbs links={links} />
            <ProductPageContent product={product}  />
        </>
    );
};

export default ProductDetails;
