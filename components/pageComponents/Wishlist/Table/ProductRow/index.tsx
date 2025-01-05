import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { LiaCartPlusSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";

export const ProductRow = () => {
    return (
        <tr className={styles.productRow}>
            <td className={styles.productCol}>
                <div className={styles.product}>
                    <figure className={styles.productMedia}>
                        <Link href="#">
                            <img
                                src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                                alt="Product image"
                            />
                        </Link>
                    </figure>

                    <h3 className={styles.productTitle}>
                        <Link href="#">Blue utility pinafore denim dress</Link>
                    </h3>
                </div>
            </td>
            <td className={styles.priceCol}>$76.00</td>
            <td className={styles.stockCol}>
                <span className={styles.inStock}>In stock</span>
            </td>
            <td className={styles.actionCol}>
                <Button
                    colorType="btnOutlinePrimary2"
                    className={styles.button}
                >
                    <LiaCartPlusSolid /> Add to Cart
                </Button>
            </td>
            <td className={styles.removeCol}>
                <button className={styles.removeButton}>
                    <IoMdClose />
                </button>
            </td>
        </tr>
    );
};
