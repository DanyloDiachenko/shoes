"use client";

import { Pagination } from "./Pagination";
import { Product } from "./Product";
import { ProductListProps } from "./productList.props";
import styles from "./styles.module.scss";
import { Toolbox } from "./Toolbox";

export const ProductList = ({ productsResponse }: ProductListProps) => {
    return (
        <div className={styles.column}>
            <Toolbox />
            <div className="products mb-3">
                {productsResponse.data.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
            <Pagination totalPages={productsResponse.totalPages} />
        </div>
    );
};
