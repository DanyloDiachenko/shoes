import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { ProductRow } from "./ProductRow";

export const Table = () => {
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
                <ProductRow />
                <ProductRow />
                <ProductRow />
                <ProductRow />
            </tbody>
        </table>
    );
};
