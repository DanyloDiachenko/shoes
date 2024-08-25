"use client";

import Link from "next/link";
import { Button } from "@/components/UI/Button";
import { getRating } from "@/helpers/getRating";
import { FaRegHeart } from "react-icons/fa";
import styles from "./styles.module.scss";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ProductSlideProps } from "./productSlide.props";

export const ProductSlide = ({
    mainCategory,
    id,
    mainImage,
    title,
    price,
    rating,
    reviews,
    images,
}: ProductSlideProps) => {
    return (
        <div className={styles.productSlide}>
            <figure className={styles.media}>
                <span className={`${styles.label} ${styles[mainCategory.key]}`}>
                    {mainCategory.label}
                </span>
                <Link href={`/products/${id}`}>
                    <img
                        src={mainImage}
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
                    <Button colorType="btnOutlinePrimary2">
                        <LiaCartPlusSolid />
                        <span>add to cart</span>
                    </Button>
                </div>
            </figure>
            <div className={styles.productBody}>
                <div className={styles.category}>
                    <Link href={`/products?category=${mainCategory.key}`}>
                        {mainCategory.label}
                    </Link>
                </div>
                <h3 className={styles.title}>
                    <Link href={`/products/${id}`}>{title}</Link>
                </h3>
                <div className={styles.price}>${price.toFixed(2)}</div>
                <div className={styles.ratingsContainer}>
                    {getRating(rating)}
                    <span className={styles.text}>
                        ({reviews.length} Reviews)
                    </span>
                </div>
                <div className={styles.thumbs}>
                    {images.map((image, index) => (
                        <Link
                            href="#"
                            key={index}
                            className={index === 0 ? styles.active : ""}
                        >
                            <img src={image} alt="product desc" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
