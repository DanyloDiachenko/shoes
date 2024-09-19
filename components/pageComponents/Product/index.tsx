import { DetailsBottom } from "./DetailsBottom";
import { DetailsTop } from "./DetailsTop";
import { ProductPageContentProps } from "./product.props";
import { StickyProduct } from "./StickyProduct";
import { YouMayAlsoLike } from "./YouMayAlsoLike";

export const ProductPageContent = ({
    product,
    mayLikedProducts,
    serverCurrency,
}: ProductPageContentProps) => {
    return (
        <>
            <div className="page-content">
                <div className="container">
                    <DetailsTop product={product} />
                    <DetailsBottom product={product} />
                    <YouMayAlsoLike
                        products={mayLikedProducts}
                        serverCurrency={serverCurrency}
                    />
                </div>
            </div>
            <StickyProduct product={product} serverCurrency={serverCurrency} />
        </>
    );
};
