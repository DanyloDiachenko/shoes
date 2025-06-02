import { LiaBinocularsSolid, LiaCartPlusSolid } from "react-icons/lia";
import styles from "./styles.module.scss";
import Link from "next/link";
import { getProductRating } from "@/helpers/getProductRating";
import { FaRegHeart } from "react-icons/fa";
import { ProductProps } from "./product.props";
import { getProductPrice } from "@/helpers/getProductPrice";
import Image from "next/image";
import { getProductDiscount } from "@/helpers/getProductDiscount";
import { addProductToWishlist } from "@/helpers/addProductToWishlist";
import { useDispatch } from "react-redux";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { setProduct } from "@/store/slices/product";
import { Popup } from "@/types/popup.type";
import { setOpenedPopup } from "@/store/slices/openedPopup";

export const Product = ({
    id,
    title,
    priceEur,
    priceUah,
    priceWithDiscountEur,
    priceWithDiscountUah,
    mainImage,
    mainCategory,
    categories,
    reviews,
    rating,
    color,
    currency,
    description,
    quantityInStock,
    productInformation,
    additionalInformation,
    purchasedNumber,
    images,
    brand,
    sizes,
}: ProductProps) => {
    const dispatch = useDispatch();

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const onAddProductToWishlistHandler = () => {
        addProductToWishlist(id);
        toogleLocalStorageHandler();
    };

    const setProductHandler = () => {
        dispatch(
            setProduct({
                id,
                title,
                priceEur,
                priceUah,
                priceWithDiscountEur,
                priceWithDiscountUah,
                mainImage,
                mainCategory,
                categories,
                reviews,
                rating,
                color,
                description,
                quantityInStock,
                productInformation,
                additionalInformation,
                purchasedNumber,
                images,
                brand,
                sizes,
            })
        );
    };

    const setOpenedPopupHandler = (popup: Popup) => {
        dispatch(setOpenedPopup(popup));
    };

    const onQuickViewClick = () => {
        setProductHandler();
        setOpenedPopupHandler("quickView");
    };

    return (
        <div className={styles.product}>
            <figure className={styles.media}>
                <span className={`${styles.label} ${styles.labelPrimary}`}>
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
                <Link href={`/products/${id}`} className={styles.productLink}>
                    <Image
                        src={mainImage}
                        alt="Product image"
                        sizes="100vw"
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
            <div className={styles.body}>
                <div className={styles.category}>
                    {categories.map((category, index) => (
                        <span key={index}>
                            <Link href={`/products/${category.slug}`}>
                                {category.title}
                            </Link>
                            {index < categories.length - 1 && ", "}
                        </span>
                    ))}
                </div>
                <h3 className={styles.title}>
                    <Link
                        href={`/products/${id}`}
                        className={styles.productLink}
                    >
                        {title}
                    </Link>
                </h3>
                <div className={styles.price}>
                    {getProductPrice(
                        priceUah,
                        priceEur,
                        priceWithDiscountUah,
                        priceWithDiscountEur,
                        currency
                    )}
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.ratingsContainer}>
                    {getProductRating(rating)}
                    <span className={styles.ratingsText}>
                        ( {reviews.length} Reviews )
                    </span>
                </div>
                <div className={styles.productNav}>
                    <Link
                        href={`/products?color=${color.slug}`}
                        className={styles.color}
                        style={{ background: color.hexCode }}
                    >
                        <span className="sr-only">{color.title}</span>
                    </Link>
                </div>
                <div className={styles.actions}>
                    <Link href={`/products/${id}`} className={styles.product}>
                        <LiaCartPlusSolid />
                        <span>add to cart</span>
                    </Link>
                    <Link
                        href="#"
                        scroll={false}
                        className={styles.product}
                        onClick={onQuickViewClick}
                    >
                        <LiaBinocularsSolid />
                        <span>quick view</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
