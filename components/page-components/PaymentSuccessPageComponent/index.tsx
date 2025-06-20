import { LuCheck, LuMail, LuPackage, LuTruck } from "react-icons/lu";
import Image from "next/image";
import styles from "./styles.module.scss";
import { SuccessHeader } from "./SuccessHeader";
import { OrderSummary } from "./OrderSummary";

export const PaymentSuccessPageComponent = () => {
    return (
        <div className={`container ${styles.container}`}>
            <main className={`page-content`}>
                <SuccessHeader />
                <div className={styles.contentGrid}>
                    <OrderSummary />
                    <div className={styles.rightColumn}>
                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.cardTitle}>
                                    <LuTruck className="w-5 h-5 text-amber-600" />
                                    Shipping Information
                                </h2>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.shippingInfo}>
                                    <div className={styles.address}>
                                        <p className={styles.name}>John Doe</p>
                                        <p className={styles.addressLine}>
                                            123 Main Street
                                        </p>
                                        <p className={styles.addressLine}>
                                            New York, NY 10001
                                        </p>
                                        <p className={styles.addressLine}>
                                            United States
                                        </p>
                                    </div>
                                    <div className={styles.deliveryInfo}>
                                        <p className={styles.deliveryText}>
                                            Estimated delivery:{" "}
                                            <span className={styles.highlight}>
                                                3-5 business days
                                            </span>
                                        </p>
                                        <p className={styles.deliveryText}>
                                            Tracking number will be sent via
                                            email
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardHeader}>
                                <h2 className={styles.cardTitle}>
                                    <LuMail className="w-5 h-5 text-amber-600" />
                                    What's Next?
                                </h2>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.nextSteps}>
                                    <div className={styles.stepsList}>
                                        <div className={styles.step}>
                                            <div
                                                className={styles.stepDot}
                                            ></div>
                                            <p>
                                                Order confirmation has been sent
                                                to your email
                                            </p>
                                        </div>
                                        <div className={styles.step}>
                                            <div
                                                className={styles.stepDot}
                                            ></div>
                                            <p>
                                                You'll receive shipping updates
                                                via email and SMS
                                            </p>
                                        </div>
                                        <div className={styles.step}>
                                            <div
                                                className={styles.stepDot}
                                            ></div>
                                            <p>
                                                Track your order in your account
                                                dashboard
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.actionButtons}>
                    <button className={styles.primaryButton}>
                        Continue Shopping
                    </button>
                    <button
                        className={`${styles.outlineButton} ${styles.gray}`}
                    >
                        Track Order
                    </button>
                </div>

                <div className={styles.supportSection}>
                    <h3 className={styles.supportTitle}>Need Help?</h3>
                    <p className={styles.supportText}>
                        If you have any questions about your order, please don't
                        hesitate to contact us.
                    </p>
                    <div className={styles.supportLinks}>
                        <a href="#">Contact Support</a>
                        <span className={styles.separator}>|</span>
                        <a href="#">Return Policy</a>
                        <span className={styles.separator}>|</span>
                        <a href="#">FAQ</a>
                    </div>
                </div>
            </main>
        </div>
    );
};
