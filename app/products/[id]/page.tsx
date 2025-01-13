import { PageProps } from "@/.next/types/app/products/[id]/page";
import { getProduct } from "@/app/api/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/pageComponents/Product";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
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

    /* const [
        mayLikedProductsByCategories,
        mayLikedProductsBySizes,
        mayLikedProductsByColor,
        mayLikedProductsByBrand,
    ] = await Promise.all([
        getProducts({
            limit: 3,
            categorySlugs: product.categories.map((category) => category.slug),
            currency: currency,
        }),
        getProducts({
            limit: 3,
            sizeSlugs: product.sizes.map((size) => String(size.slug)),
            currency: currency,
        }),
        getProducts({
            limit: 3,
            colorSlug: product.color.slug,
            currency: currency,
        }),
        getProducts({
            limit: 3,
            brandSlugs: [product.brand.slug],
            currency: currency,
        }),
    ]); */
    /* const mayLikedProducts = [
        ...mayLikedProductsByCategories.data,
        ...mayLikedProductsBySizes.data,
        ...mayLikedProductsByColor.data,
        ...mayLikedProductsByBrand.data,
    ]; */

    return (
        <>
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <ProductPageContent product={product} />
        </>
    );
};

export default ProductDetails;
