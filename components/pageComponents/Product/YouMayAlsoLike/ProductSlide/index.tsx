"use client";

import Link from "next/link";
import { Button } from "@/components/UI/Button";
import { getRating } from "@/helpers/getRating";
import { FaRegHeart } from "react-icons/fa";
import styles from "./styles.module.scss";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ProductSlideProps } from "./productSlide.props";

export const ProductSlide = ({
    label,
    labelType,
    imageSrc,
    productLink,
    category,
    title,
    price,
    rating,
    reviews,
    thumbs,
}: ProductSlideProps) => {
    return (
        <div className={styles.productSlide}>
            <figure className={styles.media}>
                <span className={`${styles.label} ${styles[labelType]}`}>
                    {label}
                </span>
                <Link href={productLink}>
                    <img
                        src={imageSrc}
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
                    <Link href={productLink}>{category}</Link>
                </div>
                <h3 className={styles.title}>
                    <Link href={productLink}>{title}</Link>
                </h3>
                <div className={styles.price}>{price}</div>
                <div className={styles.ratingsContainer}>
                    {getRating(rating)}
                    <span className={styles.text}>({reviews} Reviews)</span>
                </div>
                <div className={styles.thumbs}>
                    {thumbs.map((thumb, index) => (
                        <Link
                            href="#"
                            key={index}
                            className={index === 0 ? styles.active : ""}
                        >
                            <img src={thumb} alt="product desc" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};
