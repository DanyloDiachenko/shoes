import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { FaRegHeart } from "react-icons/fa";
import { StickyProductProps } from "./stickyProduct.props";
import { Quantity } from "./Quantity";
import { AddProductToCart } from "@/components/additional/AddProductToCart";
import { getCurrency } from "@/helpers/getCurrency";
import { Price } from "./Price";
import Image from "next/image";

export const StickyProduct = async ({
    product,
    cookieProducts,
}: StickyProductProps) => {
    const currency = await getCurrency();

    return (
        <div className={styles.stickyProduct}>
            <div className={`container ${styles.container}`}>
                <div className={`row ${styles.row}`}>
                    <div className={styles.columnLeft}>
                        <figure className={styles.media}>
                            <Link href={`/products/${product.id}`}>
                                <Image
                                    src={product.mainImage}
                                    alt="Product image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
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
                        <Price currency={currency} product={product} />
                        <Quantity product={product} />
                        <div className={styles.actions}>
                            <AddProductToCart
                                product={product}
                                cookieProducts={cookieProducts}
                            />
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
