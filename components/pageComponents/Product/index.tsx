import { DetailsBottom } from "./DetailsBottom";
import { DetailsTop } from "./DetailsTop";
import { ProductPageContentProps } from "./product.props";
import { StickyProduct } from "./StickyProduct";
import { YouMayAlsoLike } from "./YouMayAlsoLike";

export const ProductPageContent = ({ product }: ProductPageContentProps) => {
    return (
        <>
            <div className="page-content">
                <div className="container">
                    <DetailsTop product={product} />
                    <DetailsBottom />
                    <YouMayAlsoLike />
                </div>
            </div>
            <StickyProduct />
        </>
    );
};
