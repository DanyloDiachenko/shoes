import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import { ProductRowProps } from "./productRow.props";
import { getProductPrice } from "@/helpers/getProductPrice";

export const ProductRow = ({
    product,
    onProductRemoveClick,
    currency,
}: ProductRowProps) => {
    return (
        <tr className={styles.productRow}>
            <td className={styles.productCol}>
                <div className={styles.product}>
                    <figure className={styles.productMedia}>
                        <Link href="#">
                            <img src={product.mainImage} alt="Product image" />
                        </Link>
                    </figure>
                    <h3 className={styles.productTitle}>
                        <Link href="#">{product.title}</Link>
                    </h3>
                </div>
            </td>
            <td className={styles.priceCol}>
                {getProductPrice(product.priceUah, product.priceEur, currency)}
            </td>
            <td className={styles.stockCol}>
                <span
                    className={`${
                        product.quantityInStock > 0
                            ? styles.inStock
                            : styles.outOfStock
                    }`}
                >
                    {product.quantityInStock > 0 ? "In stock" : "Out of stock"}
                </span>
            </td>
            <td className={styles.actionCol}>
                <Link href={`/products/${product.id}`}>
                    <Button
                        colorType="btnOutlinePrimary2"
                        className={styles.button}
                    >
                        <LiaCartPlusSolid /> Add to Cart
                    </Button>
                </Link>
            </td>
            <td className={styles.removeCol}>
                <button
                    className={styles.removeButton}
                    onClick={() => onProductRemoveClick(product.id)}
                >
                    <IoMdClose />
                </button>
            </td>
        </tr>
    );
};
