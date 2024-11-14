"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { act, useState } from "react";
import { payments } from "./payments";

export const Aside = () => {
    const [activeAccordionId, setActiveAccordionId] = useState<number | null>(
        0
    );

    const onAccordionClick = (index: number) => {
        if (activeAccordionId === index) {
            setActiveAccordionId(null);
        } else {
            setActiveAccordionId(index);
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
                    {payments.map((payment, index) => (
                        <div
                            className={`${styles.card} ${
                                index === activeAccordionId ? styles.active : ""
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
                                            index === activeAccordionId
                                        }
                                        aria-controls={`collapse-${index}`}
                                        onClick={() => onAccordionClick(index)}
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
                                aria-expanded={index === activeAccordionId}
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
