import { LuPackage } from "react-icons/lu";
import styles from "./styles.module.scss";
import Image from "next/image";
import { OrderSummaryProps } from "./OrderSummary.props";
import { getProductPrice } from "@/helpers/getProductPrice";
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";
import Link from "next/link";
import { getPricePerShipping } from "@/helpers/getPricePerShipping";
import { getTotalPricePerProduct } from "@/helpers/getTotalPricePerProduct";
import { calculateTotalPricePerProducts } from "@/helpers/getTotalPricePerProducts";
import { getPricePerProductsAndShipping } from "@/helpers/getPricePerProductsAndShipping";
import { BoughtProduct } from "./BoughtProduct";

export const OrderSummary = ({
    shippingType,
    currency,
    boughtProducts,
}: OrderSummaryProps) => {
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
                        <BoughtProduct product={product} key={product.id} currency={currency} />
                    ))}
                    <div className={styles.separator}></div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Subtotal:</span>
                        <span className={styles.value}>
                            {getCurrencyIcon(currency)}
                            {calculateTotalPricePerProducts(
                                boughtProducts,
                                currency
                            ).toFixed(2)}
                        </span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Shipping:</span>
                        <span className={styles.value}>
                            {getCurrencyIcon(currency)}
                            {getPricePerShipping(
                                currency,
                                shippingType
                            ).toFixed(2)}
                        </span>
                    </div>
                    <div className={`${styles.summaryRow} ${styles.total}`}>
                        <span className={styles.label}>Total</span>
                        <span className={styles.value}>
                            {getCurrencyIcon(currency)}
                            {getPricePerProductsAndShipping(
                                boughtProducts,
                                shippingType,
                                currency
                            ).toFixed(2)}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
