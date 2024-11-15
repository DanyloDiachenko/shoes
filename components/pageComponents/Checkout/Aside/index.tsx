
import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { payments } from "./payments";
import { AsideProps } from "./aside.props";
import { Payment } from "@/types/payment.type";
import { getCurrency } from "@/helpers/getCurrency";
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";

export const Aside = ({
    paymentMethod,
    setPaymentMethod,
    products,
    cookieProducts,
    currency,
}: AsideProps) => {
    const onAccordionClick = (paymentMethodValue: Payment) => {
        if (paymentMethod === paymentMethodValue) {
            setPaymentMethod(null);
        } else {
            setPaymentMethod(paymentMethodValue);
        }
    };

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
                        {products.map((product, index) => (
                            <tr key={index}>
                                <td>
                                    <Link href={`/products/${product.id}`}>
                                        {product.title}
                                    </Link>
                                </td>
                                <td></td>
                            </tr>
                        ))}

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
                    {payments.map((payment, index) => (
                        <div
                            className={`${styles.card} ${
                                payment.value === paymentMethod
                                    ? styles.active
                                    : ""
                            }`}
                            key={index}
                        >
                            <div
                                className={styles.cardHeader}
                                id={`heading-${index}`}
                            >
                                <h2 className={styles.cardTitle}>
                                    <Link
                                        role="button"
                                        data-toggle="collapse"
                                        href={`#collapse-${index}`}
                                        aria-expanded={
                                            payment.value === paymentMethod
                                        }
                                        aria-controls={`collapse-${index}`}
                                        onClick={() =>
                                            onAccordionClick(payment.value)
                                        }
                                        scroll={false}
                                    >
                                        {payment.title}
                                    </Link>
                                </h2>
                            </div>
                            <div
                                id={`collapse-${index}`}
                                className={styles.cardBodyWrapper}
                                aria-labelledby={`heading-${index}`}
                                aria-expanded={payment.value === paymentMethod}
                                data-parent="#accordion-payment"
                            >
                                <div className={styles.cardBody}>
                                    {payment.description}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <img
                    src="/images/icons/payments.png"
                    alt="Payment methods"
                    width="272"
                    height="20"
                    className={styles.payments}
                />
                <Button
                    type="submit"
                    colorType="btnOutlinePrimary2"
                    className={styles.buttonSubmit}
                >
                    <span>Place Order</span>
                </Button>
            </div>
        </aside>
    );
};
