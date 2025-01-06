import styles from "./styles.module.scss";
import { ProductRow } from "./ProductRow";
import { getServerCookie } from "@/helpers/getServerCookie";
import { Product } from "@/interfaces/product.interface";
import { getProduct } from "@/app/api/products";

export const Table = async () => {
    const wishlistIdsString = await getServerCookie("wishlistIds");
    const wishlistIds = wishlistIdsString ? JSON.parse(wishlistIdsString) : [];

    let products: Product[] = [];

    for (let id = 0; id < wishlistIds.length; id++) {
        const product = await getProduct(wishlistIds[id]);

        products.push(product);
    }

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Stock Status</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <ProductRow key={product.id} product={product} />
                ))}
                {/* <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow /> */}
            </tbody>
        </table>
    );
};
