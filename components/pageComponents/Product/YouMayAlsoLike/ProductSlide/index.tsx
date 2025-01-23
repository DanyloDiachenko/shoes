"use client";

import Link from "next/link";
import { Button } from "@/components/UI/Button";
import { getProductRating } from "@/helpers/getProductRating";
import { FaRegHeart } from "react-icons/fa";
import styles from "./styles.module.scss";
import { LiaCartPlusSolid } from "react-icons/lia";
import { ProductSlideProps } from "./productSlide.props";
import { useState } from "react";
import { getProductPrice } from "@/helpers/getProductPrice";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toogleLocalStorage } from "@/store/slices/toogleLocalStorage";
import { addProductToWishlist } from "@/helpers/addProductToWishlist";

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
    currency,
    priceWithDiscountEur,
    priceWithDiscountUah,
    categories,
}: ProductSlideProps) => {
    const dispatch = useDispatch();

    const [activeImage, setActiveImage] = useState<string>(mainImage);

    const toogleLocalStorageHandler = () => {
        dispatch(toogleLocalStorage());
    };

    const onAddToWislistClick = () => {
        addProductToWishlist(id);
        toogleLocalStorageHandler();
    };

    return (
        <div className={styles.productSlide}>
            <figure className={styles.media}>
                <span className={`${styles.label}`}>{mainCategory.title}</span>
                <Link href={`/products/${id}`}>
                    <Image
                        src={activeImage}
                        alt="Product image"
                        className={styles.productImage}
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </Link>
                <div className={styles.actions}>
                    <Button
                        colorType="btnOutlinePrimary2"
                        className={styles.addToWishlist}
                        onClick={onAddToWislistClick}
                    >
                        <FaRegHeart />
                    </Button>
                </div>
                <div className={styles.productAction}>
                    <Link
                        href={`/products/${id}`}
                        scroll={false}
                    >
                        <LiaCartPlusSolid />
                        <span>add to cart</span>
                    </Link>
                </div>
            </figure>
            <div className={styles.productBody}>
                <div className={styles.category}>
                    {categories.map((category, index) => (
                        <span key={index}>
                            <Link
                                href={`/products?categories=${category.slug}`}
                            >
                                {category.title}
                            </Link>
                            {index !== categories.length - 1 && ", "}
                        </span>
                    ))}
                </div>
                <h3 className={styles.title}>
                    <Link href={`/products/${id}`}>{title}</Link>
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
