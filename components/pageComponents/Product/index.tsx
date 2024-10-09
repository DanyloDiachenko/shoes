import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { DetailsBottom } from "./DetailsBottom";
import { DetailsTop } from "./DetailsTop";
import { ProductPageContentProps } from "./product.props";
import { StickyProduct } from "./StickyProduct";
import { YouMayAlsoLike } from "./YouMayAlsoLike";
import { getCurrency } from "@/helpers/getCurrency";

export const ProductPageContent = ({
    product,
    mayLikedProducts,
}: ProductPageContentProps) => {
    const currency = getCurrency();
    const cookieProducts = getCookieProductsServer() || [];

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
            <StickyProduct
                product={product}
                currency={currency}
                cookieProducts={cookieProducts}
            />
        </>
    );
};
