import { PageProps } from "@/.next/types/app/products/[id]/page";
import { getProduct, getProducts } from "@/app/api/products";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/pageComponents/Product";
import { getClientCookie } from "@/helpers/getClientCookie";
import { getServerCookie } from "@/helpers/getServerCookie";
import { IProduct } from "@/interfaces/product.interface";
import { IProductCookie } from "@/interfaces/productCookie.interface";
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

    const cookieProductsString = getServerCookie("cart") || "";
    const cookieProducts: IProductCookie[] = cookieProductsString
        ? JSON.parse(cookieProductsString)
        : [];

    return (
        <>
            <Breadcrumbs links={breadcrumbItems} />
            <ProductPageContent
                cookieProducts={cookieProducts}
                product={product}
                mayLikedProducts={mayLikedProducts}
                serverCurrency={currency}
            />
        </>
    );
};

export default ProductDetails;
