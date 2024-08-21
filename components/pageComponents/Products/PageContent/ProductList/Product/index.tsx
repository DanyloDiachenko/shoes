import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";



export const Product = () => {
    return (
        <div className={styles.product}>
            <div className="row">
                <div className={styles.columnImage}>
                    <figure className={styles.media}>
                        <span className={styles.new}>New</span>
                        {/* <span className={styles.outOfStock}>Out of Stock</span> */}
                        <Link href="#">
                            <img
                                src="/images/banners/product.png"
                                alt="Product image"
                                className={styles.image}
                            />
                        </Link>
                    </figure>
                </div>
                <div className={styles.columnActions}>
                    <div className={styles.action}>
                        <div className={styles.price}>$60.00</div>
                        <div className={styles.ratingsContainer}>
                            <div className={styles.ratings}>
                                <FaStar className={styles.active} />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <span className={styles.ratingText}>
                                ( 2 Reviews )
                            </span>
                        </div>
                        <Button
                            colorType="btnOutlinePrimary2"
                            className={`${styles.addToCart}`}
                            /* className={`${styles.addToCart} ${styles.inactive}`} */
                        >
                            <LiaCartPlusSolid />
                            <span>add to cart</span>
                        </Button>
                    </div>
                </div>
                <div className={styles.columnMain}>
                    <div className={styles.productBody}>
                        <Button
                            className={styles.addToWishlist}
                            title="Add to wishlist"
                            colorType="btnOutlinePrimary2"
                        >
                            <FaRegHeart />
                        </Button>
                        <div className={styles.category}>
                            <a href="#">Women</a>
                        </div>
                        <h3 className={styles.title}>
                            <Link href="#">
                                Brown paperbag waist pencil skirt
                            </Link>
                        </h3>
                        <div className={styles.description}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetuer
                                adipiscing elit. Phasellus hendrerit.
                                Pellentesque
                            </p>
                        </div>
                        <div className={styles.thumbs}>
                            <Link href="#" className={styles.active}>
                                <img
                                    src="/images/banners/product.png"
                                    alt="product desc"
                                />
                            </Link>
                            <Link href="#">
                                <img
                                    src="/images/banners/product.png"
                                    alt="product desc"
                                />
                            </Link>
                            <Link href="#">
                                <img
                                    src="/images/banners/product.png"
                                    alt="product desc"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
