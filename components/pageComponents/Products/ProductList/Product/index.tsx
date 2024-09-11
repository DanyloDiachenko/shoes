"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { getRating } from "@/helpers/getRating";
import { ProductProps } from "./product.props";
import { useEffect, useState } from "react";
import { getClientCookie } from "@/helpers/getClientCookie";
import { CurrencyType } from "@/types/currency.type";

export const Product = ({
    mainCategory,
    quantityInStock,
    id,
    mainImage,
    priceUah,
    reviews,
    categories,
    title,
    description,
    images,
    rating,
    priceEur,
}: ProductProps) => {
    const [activeImage, setActiveImage] = useState<string>(mainImage);
    const [currency, setCurrency] = useState<CurrencyType | null>(null);

    useEffect(() => {
        const currency = getClientCookie("currency") as CurrencyType;

        setCurrency(currency);
    }, []);

    return (
        <div className={styles.product}>
            <div className="row">
                <div className={styles.columnImage}>
                    <figure className={styles.media}>
                        {quantityInStock > 0 ? (
                            <span
                                className={`${styles.category} ${
                                    styles[mainCategory.slug]
                                }`}
                            >
                                {mainCategory.title}
                            </span>
                        ) : (
                            <span className={styles.outOfStock}>
                                Out of Stock
                            </span>
                        )}
                        <Link href={`/products/${id}`}>
                            <img
                                src={activeImage}
                                alt="Product image"
                                className={styles.image}
                            />
                        </Link>
                    </figure>
                </div>
                <div className={styles.columnActions}>
                    <div className={styles.action}>
                        <div className={styles.price}>
                            {currency === "uah" ? "₴" : "€"}
                            {Number(
                                currency === "uah" ? priceUah : priceEur
                            ).toFixed(2)}
                        </div>
                        <div className={styles.ratingsContainer}>
                            {getRating(rating || 0)}
                            <span className={styles.ratingText}>
                                ( {reviews.length} Reviews )
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
                        <div className={styles.categories}>
                            {categories.map((category, index) => (
                                <div
                                    key={category.id}
                                    className={styles.category}
                                >
                                    <Link
                                        href={`/products?categories=${category.slug}`}
                                    >
                                        {category.title +
                                            (index === categories.length - 1
                                                ? ""
                                                : ", ")}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <h3 className={styles.title}>
                            <Link href={`/products/${id}`}>{title}</Link>
                        </h3>
                        <div className={styles.description}>
                            <p>{description}</p>
                        </div>
                        <div className={styles.thumbs}>
                            {images.map((image, index) => (
                                <Link
                                    key={index}
                                    href="#"
                                    onMouseEnter={() => setActiveImage(image)}
                                    className={
                                        activeImage === image
                                            ? styles.active
                                            : ""
                                    }
                                    onMouseLeave={() =>
                                        setActiveImage(mainImage)
                                    }
                                >
                                    <img src={image} alt="product desc" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
