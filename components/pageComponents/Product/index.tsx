import { DetailsBottom } from "./DetailsBottom";
import { DetailsTop } from "./DetailsTop";
import { YouMayAlsoLike } from "./YouMayAlsoLike";

export const ProductPageContent = () => {
    return (
        <div className="page-content">
            <div className="container">
                <DetailsTop />
                <DetailsBottom />
                <YouMayAlsoLike />
            </div>
        </div>
    );
};
