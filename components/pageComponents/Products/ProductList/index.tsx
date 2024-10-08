import { Pagination } from "./Pagination";
import { Product } from "./Product";
import { ProductListProps } from "./productList.props";
import styles from "./styles.module.scss";
import { Toolbox } from "./Toolbox";

export const ProductList = ({
    getProductsResponseServer,
}: ProductListProps) => {
    return (
        <div className={styles.column}>
            <Toolbox
                total={getProductsResponseServer.total}
                count={getProductsResponseServer.count}
            />
            <div className="products mb-3">
                {getProductsResponseServer.data.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <Pagination totalPages={getProductsResponseServer.totalPages} />
        </div>
    );
};
