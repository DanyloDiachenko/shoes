import { Button } from "@/components/UI/Button";
import { Quantity } from "./Quantity";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";
import { TableProps } from "./table.props";
import Link from "next/link";
import { IProduct } from "@/interfaces/product.interface";

const getProductPrice = (product: IProduct, currency: string) => {
    return currency === "uah" ? product.priceUah : product.priceEur;
};

const getProductSize = (productId: string, cookieProducts: any[]) => {
    const productCookie = cookieProducts.find(
        (cookieProduct) => cookieProduct.id === productId
    );
    return productCookie ? productCookie.size : null;
};

const calculateTotalPerProduct = (
    product: IProduct,
    quantity: number,
    currency: string
) => {
    const price = getProductPrice(product, currency);

    return price * quantity;
};

export const Table = ({
    cartProducts,
    currency,
    cookieProducts,
}: TableProps) => {
    const processedProducts = cartProducts.map((cartProduct) => {
        const selectedSize = getProductSize(cartProduct.id, cookieProducts);

        const productCookie = cookieProducts.find(
            (cookieProduct) => cookieProduct.id === cartProduct.id
        );

        const quantity = productCookie ? productCookie.quantity : 1;

        const totalPrice = calculateTotalPerProduct(
            cartProduct,
            quantity,
            currency
        );

        return {
            ...cartProduct,
            selectedSize,
            quantity,
            totalPrice,
        };
    });

    return (
        <div className={styles.column}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Size</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {processedProducts.map((cartProduct) => (
                        <tr key={cartProduct.id}>
                            <td className={styles.productCol}>
                                <div className={styles.product}>
                                    <figure className={styles.productMedia}>
                                        <Link
                                            href={`/products/${cartProduct.id}`}
                                        >
                                            <img
                                                src={cartProduct.mainImage}
                                                alt="Product image"
                                            />
                                        </Link>
                                    </figure>
                                    <h3 className={styles.productTitle}>
                                        <Link
                                            href={`/products/${cartProduct.id}`}
                                        >
                                            {cartProduct.title}
                                        </Link>
                                    </h3>
                                </div>
                            </td>
                            <td className={styles.sizeCol}>
                                {cartProduct.selectedSize}
                            </td>
                            <td className={styles.priceCol}>
                                {currency === "uah"
                                    ? `₴${cartProduct.priceUah.toFixed(2)}`
                                    : `€${cartProduct.priceEur.toFixed(2)}`}
                            </td>
                            <td className={styles.quantityCol}>
                                <Quantity
                                    cookieProducts={cookieProducts}
                                    quantity={cartProduct.quantity}
                                    product={cartProduct}
                                />
                            </td>
                            <td className={styles.totalCol}>
                                {currency === "uah"
                                    ? `₴${cartProduct.totalPrice.toFixed(2)}`
                                    : `€${cartProduct.totalPrice.toFixed(2)}`}
                            </td>
                            <td className={styles.removeCol}>
                                <button className={styles.btnRemove}>
                                    <IoMdClose />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className={styles.cartBottom}>
                <div className={styles.cartDiscount}>
                    <form action="#">
                        <div className={styles.inputGroup}>
                            <input
                                type="text"
                                className={styles.formControl}
                                required
                                placeholder="coupon code"
                            />
                            <div className={styles.inputGroupAppend}>
                                <Button
                                    colorType="btnOutlinePrimary2"
                                    className={styles.button}
                                >
                                    <FaArrowRightLong />
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>

                <Button
                    colorType="btnOutlineDark2"
                    className={styles.updateCart}
                >
                    <span>UPDATE CART</span>
                    <RxUpdate />
                </Button>
            </div>
        </div>
    );
};
