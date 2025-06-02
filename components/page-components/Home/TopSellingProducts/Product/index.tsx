import Link from "next/link";
import styles from "./styles.module.scss";
import { FaRegHeart } from "react-icons/fa";
import { getProductRating } from "@/helpers/getProductRating";
import { LiaBinocularsSolid, LiaCartPlusSolid } from "react-icons/lia";
import { ProductProps } from "./product.props";
import { getProductPrice } from "@/helpers/getProductPrice";
import Image from "next/image";
import { getProductDiscount } from "@/helpers/getProductDiscount";
import { useDispatch } from "react-redux";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { addProductToWishlist } from "@/helpers/addProductToWishlist";
import { Popup } from "@/types/popup.type";
import { setOpenedPopup } from "@/store/slices/openedPopup";

export const Product = ({
    id,
    title,
    mainCategory,
    mainImage,
    categories,
    priceEur,
    priceUah,
    priceWithDiscountEur,
    priceWithDiscountUah,
    reviews,
    color,
    rating,
    currency,
}: ProductProps) => {
    const dispatch = useDispatch();

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const onAddProductToWishlistHandler = () => {
        addProductToWishlist(id);
        toogleLocalStorageHandler();
    };

    const setOpenedPopupHandler = (popup: Popup) => {
        dispatch(setOpenedPopup(popup));
    };

    const onQuickViewClick = () => {
        setOpenedPopupHandler("quickView");
    };

    return (
        <div className={styles.product}>
            <figure className={styles.productMedia}>
                <span className={styles.productLabel}>
                    {mainCategory.title}
                </span>
                {priceWithDiscountEur && priceWithDiscountUah ? (
                    <span className={`${styles.label} ${styles.labelSale}`}>
                        {getProductDiscount(
                            currency,
                            priceWithDiscountUah,
                            priceUah,
                            priceWithDiscountEur,
                            priceEur
                        )}
                    </span>
                ) : (
                    ""
                )}
                <Link href={`/products/${id}`}>
                    <Image
                        src={mainImage}
                        alt="Product image"
                        className={styles.productImage}
                        sizes={"100vw"}
                        width={0}
                        height={0}
                    />
                </Link>
                <div className={styles.actionVertical}>
                    <button onClick={onAddProductToWishlistHandler}>
                        <FaRegHeart />
                        <span className="sr-only">add to wishlist</span>
                    </button>
                </div>
            </figure>
            <div className={styles.productBody}>
                <div className={styles.productCategories}>
                    {categories.map((category, index) => (
                        <span key={index}>
                            <Link
                                key={category.id}
                                href={`/products?categories=${category.slug}`}
                            >
                                {category.title}
                            </Link>
                            {index < categories.length - 1 && ", "}
                        </span>
                    ))}
                </div>
                <h3 className={styles.productTitle}>
                    <Link href={`/products/${id}`}>{title}</Link>
                </h3>
                <div className={styles.productPrice}>
                    {getProductPrice(
                        priceUah,
                        priceEur,
                        priceWithDiscountUah,
                        priceWithDiscountEur,
                        currency
                    )}
                </div>
            </div>
            <div className={styles.productFooter}>
                <div className={styles.ratingsContainer}>
                    <div className={styles.ratings}>
                        {getProductRating(rating)}
                    </div>
                    <span className={styles.ratingsText}>
                        ( {reviews.length} Reviews )
                    </span>
                </div>
                <div className={styles.productNav}>
                    <Link
                        href={`/products?color=${color.slug}`}
                        style={{
                            background: color.hexCode,
                        }}
                    >
                        <span className="sr-only">{color.title}</span>
                    </Link>
                </div>
                <div className={styles.productAction}>
                    <Link
                        href={`/products/${id}`}
                        className={styles.addToCart}
                        title="Add to cart"
                    >
                        <LiaCartPlusSolid />
                        <span className="sr-only">add to cart</span>
                    </Link>
                    <Link
                        href="#"
                        className={styles.quickView}
                        title="Quick view"
                        onClick={onQuickViewClick}
                        scroll={false}
                    >
                        <LiaBinocularsSolid />
                        <span className="sr-only"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
