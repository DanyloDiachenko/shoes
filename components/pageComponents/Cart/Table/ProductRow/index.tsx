import Link from "next/link";
import { ProductRowProps } from "./productRow.props";
import { Quantity } from "./Quantity";
import styles from "./styles.module.scss";
import { RemoveButton } from "./RemoveButton";
import { getProductPrice } from "@/helpers/getProductPrice";
import Image from "next/image";

export const ProductRow = ({ cartProduct, currency }: ProductRowProps) => {
    return (
        <tr className={styles.tr} key={cartProduct.id}>
            <td className={styles.productCol}>
                <div className={styles.product}>
                    <figure className={styles.productMedia}>
                        <Link href={`/products/${cartProduct.id}`}>
                            <Image
                                src={cartProduct.mainImage}
                                alt="Product image"
                                width={0}
                                height={0}
                                sizes="100vw"
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
                {getProductPrice(
                    cartProduct.priceUah,
                    cartProduct.priceEur,
                    cartProduct.priceWithDiscountUah,
                    cartProduct.priceWithDiscountEur,
                    currency
                )}
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
                <RemoveButton cartProduct={cartProduct} />
            </td>
        </tr>
    );
};
