import { Filters } from "./Filters";
import { ProductList } from "./ProductList";
import { ProductsPageContentProps } from "./productsPageContent.props";

export const ProductsPageContent = ({ productsResponse }: ProductsPageContentProps) => {
    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <ProductList productsResponse={productsResponse} />
                    <Filters />
                </div>
            </div>
        </div>
    );
};
