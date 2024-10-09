import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { DetailsBottom } from "./DetailsBottom";
import { DetailsTop } from "./DetailsTop";
import { ProductPageContentProps } from "./product.props";
import { StickyProduct } from "./StickyProduct";
import { YouMayAlsoLike } from "./YouMayAlsoLike";
import { getCurrency } from "@/helpers/getCurrency";
import { getProducts } from "@/app/api/products";

export const ProductPageContent = async ({
    product,
}: ProductPageContentProps) => {
    const currency = getCurrency();
    const cookieProducts = getCookieProductsServer() || [];
    const mayLikedProducts = (await getProducts({ limit: 12, currency })).data;

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
