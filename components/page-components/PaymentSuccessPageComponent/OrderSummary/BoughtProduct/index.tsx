import Link from "next/link";
import styles from "./styles.module.scss";
import { BoughtProductProps } from "./BoughtProduct.props";
import Image from "next/image";
import { getProductPrice } from "@/helpers/getProductPrice";
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";
import { getTotalPricePerProduct } from "@/helpers/getTotalPricePerProduct";

export const BoughtProduct = ({ product, currency }: BoughtProductProps) => {
    return (
        <div className={styles.productItem}>
            <Link href={`/products/${product.id}`}>
                <Image
                    src={product.mainImage}
                    alt={product.title}
                    width={80}
                    height={80}
                    className={styles.productImage}
                />
            </Link>
            <div className={styles.productInfo}>
                <Link
                    href={`/products/${product.id}`}
                    className={styles.productName}
                >
                    <h3>{product.title}</h3>
                </Link>
                <p className={styles.productDetails}>
                    {product.quantity} x{" "}
                    {getProductPrice(
                        product.priceUah,
                        product.priceEur,
                        product.priceWithDiscountUah,
                        product.priceWithDiscountEur,
                        currency
                    )}
                    , Size: {product.size}, Color: {product.color.title}
                </p>
            </div>
            <div className={styles.productPrice}>
                {getCurrencyIcon(currency)}
                {getTotalPricePerProduct(product, currency).toFixed(2)}
            </div>
        </div>
    );
};
