import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { DetailsBottom } from "./DetailsBottom";
import { DetailsTop } from "./DetailsTop";
import { ProductPageContentProps } from "./product.props";
import { StickyProduct } from "./StickyProduct";
import { YouMayAlsoLike } from "./YouMayAlsoLike";
import { getCurrency } from "@/helpers/getCurrency";
import { getProducts } from "@/api/products";
import { Product } from "@/interfaces/entities/product.interface";

export const ProductPageContent = async ({
    product,
}: ProductPageContentProps) => {
    const currency = await getCurrency();
    const cookieProducts = (await getCookieProductsServer()) || [];

    let mayLikedProducts: Product[] = [];
    const mayLikedProductsResponse = await getProducts({ limit: 12 });
    if ("data" in mayLikedProductsResponse) {
        mayLikedProducts = mayLikedProductsResponse.data;
    }

    return (
        <>
            <div className="page-content">
                <div className="container">
                    <DetailsTop product={product} />
                    <DetailsBottom product={product} />
                    <YouMayAlsoLike
                        products={mayLikedProducts}
                        currency={currency}
                    />
                </div>
            </div>
            <StickyProduct product={product} cookieProducts={cookieProducts} />
        </>
    );
};
