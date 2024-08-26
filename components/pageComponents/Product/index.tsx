import { DetailsBottom } from "./DetailsBottom";
import { DetailsTop } from "./DetailsTop";
import { StickyProduct } from "./StickyProduct";
import { YouMayAlsoLike } from "./YouMayAlsoLike";

export const ProductPageContent = () => {
    return (
        <>
            <div className="page-content">
                <div className="container">
                    <DetailsTop />
                    <DetailsBottom />
                    <YouMayAlsoLike />
                </div>
            </div>
            <StickyProduct />
        </>
    );
};
