"use client";

import Link from "next/link";
import { Button } from "@/components/UI/Button";
import { getProductRating } from "@/helpers/getProductRating";
import { FaRegHeart } from "react-icons/fa";
import styles from "./styles.module.scss";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ProductSlideProps } from "./productSlide.props";
import { useState } from "react";

export const ProductSlide = ({
    mainCategory,
    id,
    mainImage,
    title,
    rating,
    priceUah,
    priceEur,
    reviews,
    images,
    serverCurrency,
}: ProductSlideProps) => {
    const [activeImage, setActiveImage] = useState<string>(mainImage);

    return (
        <div className={styles.productSlide}>
            <figure className={styles.media}>
                <span
                    className={`${styles.label} ${styles[mainCategory.slug]}`}
                >
                    {mainCategory.title}
                </span>
                <Link href={`/products/${id}`}>
                    <img
                        src={activeImage}
                        alt="Product image"
                        className={styles.productImage}
                    />
                </Link>
                <div className={styles.actions}>
                    <Button
                        colorType="btnOutlinePrimary2"
                        className={styles.addToWishlist}
                    >
                        <FaRegHeart />
                    </Button>
                </div>
                <div className={styles.productAction}>
                    <Link href={`/products/${id}`}>
                        <LiaCartPlusSolid />
                        <span>add to cart</span>
                    </Link>
                </div>
            </figure>
            <div className={styles.productBody}>
                <div className={styles.category}>
                    <Link href={`/products?category=${mainCategory.slug}`}>
                        {mainCategory.title}
                    </Link>
                </div>
                <h3 className={styles.title}>
                    <Link href={`/products/${id}`}>{title}</Link>
                </h3>
                <div className={styles.price}>
                    {serverCurrency === "uah"
                        ? `₴${priceUah.toFixed(2)}`
                        : `€${priceEur.toFixed(2)}`}
                </div>
                <div className={styles.ratingsContainer}>
                    {getProductRating(rating || 0)}
                    <span className={styles.text}>
                        ({reviews.length} Reviews)
                    </span>
                </div>
                <div className={styles.thumbs}>
                    {images.map((image, index) => (
                        <div
                            key={index}
                            onMouseEnter={() => setActiveImage(image)}
                            className={
                                activeImage === image ? styles.active : ""
                            }
                            onMouseLeave={() => setActiveImage(mainImage)}
                        >
                            <img src={image} alt="product desc" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
