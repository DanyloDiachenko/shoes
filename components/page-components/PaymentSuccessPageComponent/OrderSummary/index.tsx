import { LuPackage } from "react-icons/lu";
import styles from "./styles.module.scss";
import Image from "next/image";
import { OrderSummaryProps } from "./OrderSummary.props";
import { getProductPrice } from "@/helpers/getProductPrice";
import { shippings } from "@/data/shippings";
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";
import { CartProduct } from "@/interfaces/entities/product.interface";
import Link from "next/link";
import { Shipping } from "@/interfaces/shipping.interface";
import { Currency } from "@/types/currency.type";

export const OrderSummary = ({
    shippingType,
    currency,
    boughtProducts,
}: OrderSummaryProps) => {
    const shipping = shippings.find(
        (shipping) => shipping.value === shippingType
    ) as Shipping;

    const calculateTotalPerProduct = (cartProduct: CartProduct) => {
        const pricePerProductUah =
            cartProduct.priceWithDiscountUah !== 0
                ? cartProduct.priceWithDiscountUah
                : cartProduct.priceUah;
        const pricePerProductEur =
            cartProduct.priceWithDiscountEur !== 0
                ? cartProduct.priceWithDiscountEur
                : cartProduct.priceEur;

        const pricePerProduct =
            currency === "uah" ? pricePerProductUah : pricePerProductEur;

        return pricePerProduct * cartProduct.quantity;
    };

    const calculateTotalPerOrder = () => {
        let total = 0;

        for (let i = 0; i < boughtProducts.length; i++) {
            total += calculateTotalPerProduct(boughtProducts[i]);
        }

        return total;
    };

    const getPricePerShipping = (currency: Currency) => {
        return currency === "eur" ? shipping.priceEur : shipping.priceUah;
    };

    const calculateTotal = () => {
        return calculateTotalPerOrder() + getPricePerShipping(currency);
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>
                    <LuPackage size={22} />
                    Order Summary
                </h2>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.orderSummary}>
                    {boughtProducts.map((product) => (
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
                                    , Size: {product.size}, Color:{" "}
                                    {product.color.title}
                                </p>
                            </div>
                            <div className={styles.productPrice}>
                                {getCurrencyIcon(currency)}
                                {calculateTotalPerProduct(product).toFixed(2)}
                            </div>
                        </div>
                    ))}
                    <div className={styles.separator}></div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Subtotal:</span>
                        <span className={styles.value}>
                            {getCurrencyIcon(currency)}
                            {calculateTotalPerOrder().toFixed(2)}
                        </span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Shipping:</span>
                        <span className={styles.value}>
                            {getCurrencyIcon(currency)}
                            {getPricePerShipping(currency).toFixed(2)}
                        </span>
                    </div>
                    <div className={`${styles.summaryRow} ${styles.total}`}>
                        <span className={styles.label}>Total</span>
                        <span className={styles.value}>
                            {getCurrencyIcon(currency)}
                            {calculateTotal().toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
