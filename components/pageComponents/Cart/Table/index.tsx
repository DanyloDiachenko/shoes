import { Button } from "@/components/UI/Button";
import { Quantity } from "./Quantity";
import styles from "./styles.module.scss";
import { IoMdClose } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxUpdate } from "react-icons/rx";

export const Table = () => {
    return (
        <div className={styles.column}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.productCol}>
                            <div className={styles.product}>
                                <figure className={styles.productMedia}>
                                    <a href="#">
                                        <img
                                            src="assets/images/products/table/product-1.jpg"
                                            alt="Product image"
                                        />
                                    </a>
                                </figure>

                                <h3 className={styles.productTitle}>
                                    <a href="#">
                                        Beige knitted elastic runner shoes
                                    </a>
                                </h3>
                            </div>
                        </td>
                        <td className={styles.priceCol}>$84.00</td>
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
