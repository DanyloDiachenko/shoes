import { Pagination } from "./Pagination";
import { Product } from "./Product";
import styles from "./styles.module.scss";
import { Toolbox } from "./Toolbox";

export const ProductList = () => {
    return (
        <div className={styles.column}>
            <Toolbox />
            <div className="products mb-3">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
            <Pagination />
        </div>
    );
};
