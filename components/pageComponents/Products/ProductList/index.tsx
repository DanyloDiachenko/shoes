
import { getServerCookie } from "@/helpers/getServerCookie";
import { Pagination } from "./Pagination";
import { Product } from "./Product";
import { ProductListProps } from "./productList.props";
import styles from "./styles.module.scss";
import { Toolbox } from "./Toolbox";

export const ProductList = ({ getProductsResponse, currency }: ProductListProps) => {
    return (
        <div className={styles.column}>
            <Toolbox
                total={productsResponse.total}
                count={productsResponse.count}
            />
            <div className="products mb-3">
                {productsResponse.data.map((product) => (
                    <Product
                        key={product.id}
                        {...product}
                        currency={currency}
                    />
                ))}
            </div>
            <Pagination totalPages={productsResponse.totalPages} />
        </div>
    );
};
