import { PageProps } from "@/.next/types/app/products/[id]/page";
import { getProduct, getProducts } from "@/app/api/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/pageComponents/Product";
import { getServerCookie } from "@/helpers/getServerCookie";
import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

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
    const currency = getServerCookie("currency") as CurrencyType;

    const productId = params.id;
    const product: IProduct = await getProduct(productId);

    const mayLikedProductsByCategories = await getProducts({
        limit: 3,
        categorySlugs: product.categories.map((category) => category.slug),
        currency: currency,
    });

    const mayLikedProductsBySizes = await getProducts({
        limit: 3,
        sizeSlugs: product.sizes.map((size) => String(size.slug)),
        currency: currency,
    });

    const mayLikedProductsByColor = await getProducts({
        limit: 3,
        colorSlug: product.color.slug,
        currency: currency,
    });

    const mayLikedProductsByBrand = await getProducts({
        limit: 3,
        brandSlugs: [product.brand.slug],
        currency: currency,
    });

    return (
        <>
            <Breadcrumbs links={breadcrumbItems} />
            <ProductPageContent product={product} />
        </>
    );
};

export default ProductDetails;
