import { PageProps } from "@/.next/types/app/products/page";
import { getProfile } from "@/api/auth";
import { getProduct } from "@/api/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/page-components/Product";
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

    const userProfile = await getProfile();
    const userFullName = "firstName" in userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : null;

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ProductPageContent product={product as Product} userFullName={userFullName} />
        </>
    );
};

export default ProductDetails;
