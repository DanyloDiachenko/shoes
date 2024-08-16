import styles from "./styles.module.scss";
import { Filters } from "./Filters";
import { ProductList } from "./ProductList";

export const ProductsPageContent = () => {
    return (
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <ProductList />
                    <Filters />
                </div>
            </div>
        </div>
    );
};
