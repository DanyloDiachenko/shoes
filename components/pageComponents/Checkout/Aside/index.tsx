import Link from "next/link";
import styles from "./styles.module.scss";
import { AsideProps } from "./aside.props";
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";
import { shippings } from "@/data/shippings";
import { PayPalButtons } from "@paypal/react-paypal-js";

export const Aside = ({
    products,
    currency,
    shippingType,
    onPaymentClick,
    onPaymentSuccess,
    getProductPrice,
    subtotal,
    shippingPrice,
    total,
}: AsideProps) => {
    const getShippingTitle = () => {
        const currentShippingType = shippings.find(
            (shipping) => shipping.value === shippingType
        );

        return currentShippingType?.title;
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
                                <td>
                                    {getCurrencyIcon(currency)}
                                    {getProductPrice(product).toFixed(2)}
                                </td>
                            </tr>
                        ))}

                        <tr className={styles.subtotal}>
                            <td>Subtotal:</td>
                            <td>
                                {getCurrencyIcon(currency)}
                                {subtotal.toFixed(2)}
                            </td>
                        </tr>
                        <tr className={styles.shippingMethod}>
                            <td>Shipping:</td>
                            <td>
                                {shippingType ? (
                                    <>
                                        {getShippingTitle()},{" "}
                                        {getCurrencyIcon(currency)}
                                        {shippingPrice.toFixed(2)}
                                    </>
                                ) : (
                                    <Link href="/cart">Select method</Link>
                                )}
                            </td>
                        </tr>
                        <tr className={styles.total}>
                            <td>Total:</td>
                            <td>
                                {getCurrencyIcon(currency)}
                                {total.toFixed(2)}
                            </td>
                        </tr>
                    </tbody>
                </table>
                <PayPalButtons
                    onApprove={onPaymentSuccess}
                    onClick={onPaymentClick}
                    createOrder={(_, actions) => {
                        return actions.order.create({
                            intent: "CAPTURE",
                            purchase_units: [
                                {
                                    amount: {
                                        currency_code: currency.toUpperCase(),
                                        value: total.toFixed(2),
                                    },
                                },
                            ],
                            application_context: {
                                shipping_preference: "NO_SHIPPING",
                                user_action: "PAY_NOW",
                            },
                        });
                    }}
                />
            </div>
        </aside>
    );
};
