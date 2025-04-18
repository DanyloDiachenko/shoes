import { PageProps } from "@/.next/types/app/products/page";
import { getProduct } from "@/api/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/pageComponents/Product";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { Product } from "@/interfaces/entities/product.interface";
import { notFound } from "next/navigation";

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
        title: "Details",
        link: "#",
    },
];

const ProductDetails = async ({ params }: PageProps) => {
    const productId = (await params).id;

    const product = await getProduct(productId);
    if (!product) {
        notFound();
    }

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ProductPageContent product={product as Product} />
        </>
    );
};

export default ProductDetails;
