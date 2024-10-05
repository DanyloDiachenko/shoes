import { Button } from "@/components/UI/Button";
import { Quantity } from "./Quantity";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";
import { TableProps } from "./table.props";
import Link from "next/link";
import { getServerCookie } from "@/helpers/getServerCookie";
import { CurrencyType } from "@/types/currency.type";
import { getSizes } from "@/app/api/sizes";
import { IProductSize } from "@/interfaces/product.interface";

export const Table = async ({ cartProducts, currency }: TableProps) => {
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
                    {cartProducts.map((cartProduct, index) => (
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
                            <td className={styles.sizeCol}>43</td>
                            <td className={styles.priceCol}>
                                {currency === "uah"
                                    ? `₴${cartProduct.priceUah.toFixed(2)}`
                                    : `€${cartProduct.priceEur.toFixed(2)}`}
                            </td>
                            <td className={styles.quantityCol}>
                                <Quantity />
                            </td>
                            <td className={styles.totalCol}>$84.00</td>
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
