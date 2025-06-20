import Link from "next/link";
import { OrderRowProps } from "./orderRow.props";
import styles from "./styles.module.scss";
import { getProductPrice } from "@/helpers/getProductPrice";
import Image from "next/image";
import { formatDate } from "@/helpers/formatDate";
import { getCurrencyIcon } from "@/helpers/getCurrencyIcon";
import { CartProduct } from "@/interfaces/entities/product.interface";

export const OrderRow = ({ order, currency, number }: OrderRowProps) => {
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

        for (let i = 0; i < order.cart.length; i++) {
            total += calculateTotalPerProduct(order.cart[i]);
        }

        return total;
    };

    return (
        <tr className={styles.tr}>
            <td className={styles.numberCol}>{number}</td>
            <td className={styles.dateCol}>{formatDate(order.createdAt)}</td>
            <td className={styles.shippingTypeCol}>
                {order.shippingType.charAt(0).toUpperCase() +
                    order.shippingType.slice(1)}
            </td>
            <td className={styles.productsCol}>
                <ul>
                    {order.cart.map((cartProduct) => (
                        <li key={cartProduct.id}>
                            <Link href={`/products/${cartProduct.id}`}>
                                <Image
                                    src={cartProduct.mainImage}
                                    alt={cartProduct.title}
                                    width={60}
                                    height={60}
                                />
                            </Link>
                            <div>
                                <Link href={`/products/${cartProduct.id}`}>
                                    {cartProduct.title}
                                </Link>
                                <div
                                    className={
                                        styles.cartProductQuantityWithPrice
                                    }
                                >
                                    {cartProduct.quantity} x{" "}
                                    {getProductPrice(
                                        cartProduct.priceUah,
                                        cartProduct.priceEur,
                                        cartProduct.priceWithDiscountUah,
                                        cartProduct.priceWithDiscountEur,
                                        currency
                                    )}
                                    <br />
                                    Size: {cartProduct.size}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </td>
            <td className={styles.totalCol}>
                {getCurrencyIcon(currency)}
                {calculateTotalPerOrder().toFixed(2)}
            </td>
        </tr>
    );
};
