import { PageProps } from "@/.next/types/app/products/[id]/page";
import { getProduct, getProducts } from "@/app/api/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/pageComponents/Product";
import { getCurrency } from "@/helpers/getCurrency";
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
        title: "Details",
        link: "#",
    },
];

const ProductDetails = async ({ params }: PageProps) => {
    const currency = getCurrency();
    const productId = params.id;

    const [product, mayLikedProducts] = await Promise.all([
        getProduct(productId),
        (await getProducts({ limit: 12, currency })).data,
    ]);

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
            <ProductPageContent
                product={product}
                mayLikedProducts={mayLikedProducts}
            />
        </>
    );
};

export default ProductDetails;
