import { Pagination } from "./Pagination";
import { Product } from "./Product";
import { ProductListProps } from "./productList.props";
import styles from "./styles.module.scss";
import { Toolbox } from "./Toolbox";

export const ProductList = ({
    getProductsResponseServer,
    currency,
}: ProductListProps) => {
    return (
        <div className={styles.column}>
            <Toolbox
                totalProductsNumber={getProductsResponseServer.total}
                showingProductsNumber={getProductsResponseServer.count}
            />
            <div className="products mb-3">
                {getProductsResponseServer.data.map((product) => (
                    <Product
                        key={product.id}
                        currency={currency}
                        {...product}
                    />
                ))}
            </div>
            <Pagination totalPages={getProductsResponseServer.totalPages} />
        </div>
    );
};
