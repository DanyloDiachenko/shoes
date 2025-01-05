"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { FaRegHeart } from "react-icons/fa";
import { LiaCartPlusSolid } from "react-icons/lia";
import { getProductRating } from "@/helpers/getProductRating";
import { ProductProps } from "./product.props";
import { useState } from "react";
import { getProductPrice } from "@/helpers/getProductPrice";
import { addProductToWishlist } from "@/helpers/addProductToWishlist";

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
    currency,
    brand,
}: ProductProps) => {
    const [activeImageSrc, setActiveImageSrc] = useState<string>(mainImage);

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
                                src={activeImageSrc}
                                alt="Product image"
                                className={styles.image}
                            />
                        </Link>
                    </figure>
                </div>
                <div className={styles.columnActions}>
                    <div className={styles.action}>
                        <div className={styles.price}>
                            {getProductPrice(priceUah, priceEur, currency)}
                        </div>
                        <div className={styles.ratingsContainer}>
                            {getProductRating(rating || 0)}
                            <span className={styles.ratingText}>
                                ( {reviews.length} Reviews )
                            </span>
                        </div>
                        <Link href={`/products/${id}`}>
                            <Button
                                colorType="btnOutlinePrimary2"
                                className={`${styles.addToCart} ${
                                    quantityInStock === 0 ? styles.inactive : ""
                                }`}
                            >
                                <LiaCartPlusSolid />
                                <span>add to cart</span>
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.columnMain}>
                    <div className={styles.productBody}>
                        <Button
                            className={styles.addToWishlist}
                            title="Add to wishlist"
                            colorType="btnOutlinePrimary2"
                            onClick={() => addProductToWishlist(id)}
                        >
                            <FaRegHeart />
                        </Button>
                        <div className={styles.categories}>
                            {categories.map((category, index) => (
                                <div
                                    key={category.id}
                                    className={styles.category}
                                >
                                    <span>
                                        {category.title +
                                            (index === categories.length - 1
                                                ? ""
                                                : ", ")}
                                    </span>
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
                                <div
                                    key={index}
                                    onMouseEnter={() =>
                                        setActiveImageSrc(image)
                                    }
                                    className={
                                        activeImageSrc === image
                                            ? styles.active
                                            : ""
                                    }
                                    onMouseLeave={() =>
                                        setActiveImageSrc(mainImage)
                                    }
                                >
                                    <img src={image} alt="product desc" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
