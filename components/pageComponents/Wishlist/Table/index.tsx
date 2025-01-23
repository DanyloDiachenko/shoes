"use client";

import styles from "./styles.module.scss";
import { ProductRow } from "./ProductRow";
import { Product } from "@/interfaces/product.interface";
import { TableProps } from "./table.props";
import { useState } from "react";
import { setCookie } from "@/helpers/setCookie";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";

export const Table = ({ wishlistProductsServer, currency }: TableProps) => {
    const dispatch = useDispatch();

    const [wishlistProducts, setWishlistProducts] = useState<Product[]>(
        wishlistProductsServer
    );

    const onProductRemoveClick = (productId: string) => {
        const filteredProducts = wishlistProducts.filter(
            (wishlistProduct) => wishlistProduct.id !== productId
        );

        setWishlistProducts(filteredProducts);
        setCookie(
            "wishlistIds",
            JSON.stringify(filteredProducts.map((product) => product.id))
        );

        toast.success("Product removed from wishlist");

        dispatch(toogleLocalStorage());
    };

    const renderTableOrNothing = () => {
        if (wishlistProducts.length === 0) {
            return <h2 className={styles.nothing}>No results found</h2>;
        } else {
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
                        {wishlistProducts.map((wishlistProduct) => (
                            <ProductRow
                                key={wishlistProduct.id}
                                product={wishlistProduct}
                                currency={currency}
                                onProductRemoveClick={onProductRemoveClick}
                            />
                        ))}
                    </tbody>
                </table>
            );
        }
    };

    return <>{renderTableOrNothing()}</>;
};
