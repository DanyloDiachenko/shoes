import Link from "next/link";
import styles from "./styles.module.scss";
import { payments } from "./payments";
import { AsideProps } from "./aside.props";
import { Payment } from "@/types/payment.type";
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";
import { Product } from "@/interfaces/entities/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { shippings } from "@/data/shippings";
import Image from "next/image";
import { MakePayment } from "./MakePayment";
import { useDispatch, useSelector } from "react-redux";
import { setPayment } from "@/store/slices/payment";
import { FormEvent } from "react";
import { RootState } from "@/store";

export const Aside = ({
    paymentMethod,
    setPaymentMethod,
    products,
    cookieProducts,
    currency,
    shippingType,
    onPaymentClick,
}: AsideProps) => {
    const dispatch = useDispatch();
    const payment = useSelector((state: RootState) => state.payment.payment);

    const setPaymentHandler = (paymentData: any) => {
        dispatch(setPayment(paymentData));
    };

    const onAccordionClick = (paymentMethodValue: Payment) => {
        if (paymentMethod === paymentMethodValue) {
            setPaymentMethod(null);
        } else {
            setPaymentMethod(paymentMethodValue);
        }
    };

    const getProductPrice = (product: Product) => {
        const cookieProduct = cookieProducts.find(
            (cookieProduct) => cookieProduct.id === product.id
        ) as CookieProduct;

        const productPriceUah =
            product.priceWithDiscountUah !== 0
                ? product.priceWithDiscountUah
                : product.priceUah;
        const productPriceEur =
            product.priceWithDiscountEur !== 0
                ? product.priceWithDiscountEur
                : product.priceEur;

        return currency === "uah"
            ? productPriceUah * cookieProduct.quantity
            : productPriceEur * cookieProduct.quantity;
    };

    const getSubtotalPrice = () => {
        return products.reduce((acc, product) => {
            return acc + getProductPrice(product);
        }, 0);
    };

    const getShippingPrice = () => {
        if (shippingType === "free") {
            return 0;
        }

        const currentShippingType = shippings.find(
            (shipping) => shipping.value === shippingType
        );

        if (currency == "uah") {
            return currentShippingType?.priceUah || 0;
        }

        return currentShippingType?.priceEur || 0;
    };

    const getTotalPrice = () => {
        return getSubtotalPrice() + getShippingPrice();
    };

    const getShippingTitle = () => {
        const currentShippingType = shippings.find(
            (shipping) => shipping.value === shippingType
        );

        return currentShippingType?.title;
    };

    const onPaymentClickHandler = (e: FormEvent) => {
        console.log(getTotalPrice());
        setPaymentHandler({ ...payment, amount: getTotalPrice() });
        console.log(payment);

        onPaymentClick(e);
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
                                {getSubtotalPrice().toFixed(2)}
                            </td>
                        </tr>
                        <tr className={styles.shippingMethod}>
                            <td>Shipping:</td>
                            <td>
                                {shippingType ? (
                                    <>
                                        {getShippingTitle()},{" "}
                                        {getCurrencyIcon(currency)}
                                        {getShippingPrice().toFixed(2)}
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
                                {getTotalPrice().toFixed(2)}
                            </td>
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
                <Image
                    src="/images/icons/payments.png"
                    alt="Payment methods"
                    width="272"
                    height="20"
                    className={styles.payments}
                />
                <MakePayment onPaymentClick={onPaymentClickHandler} />
            </div>
        </aside>
    );
};
