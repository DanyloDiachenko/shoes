import Link from "next/link";
import { ProductRowProps } from "./productRow.props";
import { Quantity } from "./Quantity";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";

export const ProductRow = ({ cartProduct, currency }: ProductRowProps) => {
    return (
        <tr className={styles.tr} key={cartProduct.id}>
            <td className={styles.productCol}>
                <div className={styles.product}>
                    <figure className={styles.productMedia}>
                        <Link href={`/products/${cartProduct.id}`}>
                            <img
                                src={cartProduct.mainImage}
                                alt="Product image"
                            />
                        </Link>
                    </figure>
                    <h3 className={styles.productTitle}>
                        <Link href={`/products/${cartProduct.id}`}>
                            {cartProduct.title}
                        </Link>
                    </h3>
                </div>
            </td>
            <td className={styles.sizeCol}>{cartProduct.selectedSize}</td>
            <td className={styles.priceCol}>
                {currency === "uah"
                    ? `₴${cartProduct.priceUah.toFixed(2)}`
                    : `€${cartProduct.priceEur.toFixed(2)}`}
            </td>
            <td className={styles.quantityCol}>
                <Quantity
                    quantity={cartProduct.quantity}
                    product={cartProduct}
                />
            </td>
            <td className={styles.totalCol}>
                {currency === "uah"
                    ? `₴${cartProduct.totalPrice.toFixed(2)}`
                    : `€${cartProduct.totalPrice.toFixed(2)}`}
            </td>
            <td className={styles.removeCol}>
                <button className={styles.btnRemove}>
                    <IoMdClose />
                </button>
            </td>
        </tr>
    );
};
