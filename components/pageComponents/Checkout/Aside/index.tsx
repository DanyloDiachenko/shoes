import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";

export const Aside = () => {
    return (
        <aside className={styles.column}>
            <div className={styles.summary}>
                <h3 className={styles.title}>Your Order</h3>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link href="#">
                                    Beige knitted elastic runner shoes
                                </Link>
                            </td>
                            <td>$84.00</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="#">
                                    Blue utility pinafore denimdress
                                </Link>
                            </td>
                            <td>$76,00</td>
                        </tr>
                        <tr className={styles.subtotal}>
                            <td>Subtotal:</td>
                            <td>$160.00</td>
                        </tr>
                        <tr>
                            <td>Shipping:</td>
                            <td>Free shipping</td>
                        </tr>
                        <tr className={styles.total}>
                            <td>Total:</td>
                            <td>$160.00</td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.accordion} id="accordion-payment">
                    <div className={styles.card}>
                        <div className={styles.cardHeader} id="heading-1">
                            <h2 className={styles.cardTitle}>
                                <Link
                                    role="button"
                                    data-toggle="collapse"
                                    href="#collapse-1"
                                    aria-expanded="true"
                                    aria-controls="collapse-1"
                                >
                                    Direct bank transfer
                                </Link>
                            </h2>
                        </div>
                        <div
                            id="collapse-1"
                            className={styles.collapse}
                            aria-labelledby="heading-1"
                            aria-expanded="true"
                            data-parent="#accordion-payment"
                        >
                            <div className={styles.cardBody}>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order will not be shipped until
                                the funds have cleared in our account.
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardHeader} id="heading-2">
                            <h2 className={styles.cardTitle}>
                                <Link
                                    role="button"
                                    data-toggle="collapse"
                                    href="#collapse-2"
                                    aria-expanded="false"
                                    aria-controls="collapse-2"
                                >
                                    Direct bank transfer
                                </Link>
                            </h2>
                        </div>
                        <div
                            id="collapse-2"
                            className={styles.collapse}
                            aria-labelledby="heading-2"
                            aria-expanded="false"
                            data-parent="#accordion-payment"
                        >
                            <div className={styles.cardBody}>
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order will not be shipped until
                                the funds have cleared in our account.
                            </div>
                        </div>
                    </div>
                </div>
                <Button type="submit" colorType="btnPrimary">
                    <span>Place Order</span>
                </Button>
            </div>
        </aside>
    );
};
