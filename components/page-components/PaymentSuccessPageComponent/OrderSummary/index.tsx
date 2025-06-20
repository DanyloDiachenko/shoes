import { LuPackage } from "react-icons/lu";
import styles from "./styles.module.scss";
import Image from "next/image";

export const OrderSummary = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>
                    <LuPackage className="w-5 h-5 text-amber-600" />
                    Order Summary
                </h2>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.orderSummary}>
                    <div className={styles.productItem}>
                        <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Nike M2K Tekno"
                            width={80}
                            height={80}
                            className={styles.productImage}
                        />
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>
                                Nike M2K Tekno White/Black
                            </h3>
                            <p className={styles.productDetails}>
                                Size: 42, Color: White/Black
                            </p>
                            <p className={styles.productDetails}>Qty: 1</p>
                        </div>
                        <div className={styles.productPrice}>€71.95</div>
                    </div>

                    <div className={styles.productItem}>
                        <Image
                            src="/placeholder.svg?height=80&width=80"
                            alt="Nike Air Force"
                            width={80}
                            height={80}
                            className={styles.productImage}
                        />
                        <div className={styles.productInfo}>
                            <h3 className={styles.productName}>
                                NIKE AIR FORCE SHADOW (WHITE)
                            </h3>
                            <p className={styles.productDetails}>
                                Size: 40, Color: White
                            </p>
                            <p className={styles.productDetails}>Qty: 1</p>
                        </div>
                        <div className={styles.productPrice}>€74.31</div>
                    </div>

                    <div className={styles.separator}></div>

                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Subtotal</span>
                        <span className={styles.value}>€146.26</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Shipping</span>
                        <span className={styles.value}>€5.99</span>
                    </div>
                    <div className={styles.summaryRow}>
                        <span className={styles.label}>Tax</span>
                        <span className={styles.value}>€30.47</span>
                    </div>
                    <div className={`${styles.summaryRow} ${styles.total}`}>
                        <span className={styles.label}>Total</span>
                        <span className={styles.value}>€182.72</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
