import Link from "next/link";
import styles from "./styles.module.scss";
import { BsCart2 } from "react-icons/bs";
import { IoMdClose, IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/UI/Button";

export const CartDropdown = () => {
    

    return (
        <div className={styles.dropdown}>
            <Link href="#" className={styles.dropdownToggle} role="button">
                <BsCart2 className={styles.cartIcon} />
                <span className={styles.cartCount}>2</span>
            </Link>
            <div className={styles.dropdownMenu}>
                <div className={styles.dropdownCartProducts}>
                    <div className={styles.product}>
                        <div className={styles.productCartDetails}>
                            <h4 className={styles.productTitle}>
                                <Link href="product.html">
                                    Blue utility pinafore denim dress
                                </Link>
                            </h4>
                            <span className={styles.cartProductInfo}>
                                <span className={styles.cartProductQty}>1</span>{" "}
                                x $76.00
                            </span>
                        </div>
                        <figure className={styles.productImageContainer}>
                            <Link
                                href="product.html"
                                className={styles.productImage}
                            >
                                <img
                                    src="/images/icons/product-1.png"
                                    alt="product"
                                />
                            </Link>
                        </figure>
                        <Link
                            href="#"
                            className={styles.btnRemove}
                            title="Remove Product"
                        >
                            <IoMdClose />
                        </Link>
                    </div>
                    <div className={styles.product}>
                        <div className={styles.productCartDetails}>
                            <h4 className={styles.productTitle}>
                                <Link href="product.html">
                                    Blue utility pinafore denim dress
                                </Link>
                            </h4>
                            <span className={styles.cartProductInfo}>
                                <span className={styles.cartProductQty}>1</span>{" "}
                                x $76.00
                            </span>
                        </div>
                        <figure className={styles.productImageContainer}>
                            <Link
                                href="product.html"
                                className={styles.productImage}
                            >
                                <img
                                    src="/images/icons/product-1.png"
                                    alt="product"
                                />
                            </Link>
                        </figure>
                        <Link
                            href="#"
                            className={styles.btnRemove}
                            title="Remove Product"
                        >
                            <IoMdClose />
                        </Link>
                    </div>
                </div>
                <div className={styles.dropdownCartTotal}>
                    <span>Total</span>
                    <span className={styles.cartTotalPrice}>$160.00</span>
                </div>
                <div className={styles.dropdownCartAction}>
                    <Link href="cart.html">
                        <Button
                            colorType="btnPrimary"
                            className={styles.buttonView}
                        >
                            View Cart
                        </Button>
                    </Link>
                    <Link href="checkout.html">
                        <Button
                            colorType="btnOutlinePrimary2"
                            className={styles.buttonCheckout}
                        >
                            <span>Checkout</span>
                            <IoIosArrowRoundForward />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
