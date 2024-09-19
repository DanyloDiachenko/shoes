import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { StickyProductProps } from "./stickyProduct.props";

export const StickyProduct = ({
    product,
    serverCurrency,
}: StickyProductProps) => {
    return (
        <div className={styles.stickyProduct}>
            <div className={`container ${styles.container}`}>
                <div className={`row ${styles.row}`}>
                    <div className={styles.columnLeft}>
                        <figure className={styles.media}>
                            <Link href={`/products/${product.id}`}>
                                <img
                                    src={product.mainImage}
                                    alt="Product image"
                                />
                            </Link>
                        </figure>
                        <h4 className={styles.title}>
                            <Link href={`/products/${product.id}`}>
                                {product.title}
                            </Link>
                        </h4>
                    </div>
                    <div className={styles.columnRight}>
                        <div className={styles.price}>
                            {serverCurrency === "uah" ? "₴" : "€"}
                            {serverCurrency === "uah"
                                ? product.priceUah.toFixed(2)
                                : product.priceEur.toFixed(2)}
                        </div>
                        <div className={styles.quantityFilter}>
                            <button
                                className={styles.decrement}
                                aria-label="Decrement"
                            >
                                <FaMinus />
                            </button>
                            <input
                                type="number"
                                id="qty"
                                className={styles.input}
                                /* value="1" */
                                defaultValue={1}
                                min="1"
                                max={product.quantityInStock}
                                step="1"
                                data-decimals="0"
                                required
                                disabled
                            />
                            <button
                                className={styles.increment}
                                aria-label="Increment"
                            >
                                <FaPlus />
                            </button>
                        </div>
                        <div className={styles.actions}>
                            <Button
                                colorType="btnOutlinePrimary2"
                                className={`${styles.addToCart}`}
                            >
                                <LiaCartPlusSolid />
                                <span>add to cart</span>
                            </Button>
                            <Button
                                className={styles.addToWishlist}
                                title="Add to wishlist"
                                colorType="btnOutlinePrimary2"
                            >
                                <FaRegHeart />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
