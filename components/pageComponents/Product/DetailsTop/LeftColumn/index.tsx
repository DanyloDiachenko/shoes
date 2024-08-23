"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { useState } from "react";

const productImages: string[] = [
    "/images/banners/product-details.png",
    "/images/banners/product-details.png",
    "/images/banners/product-details.png",
    "/images/banners/product-details.png",
];

export const ProductDetailsTopLeftColumn = () => {
    const [activeImage, setActiveImage] = useState<string>(productImages[0]);

    return (
        <div className={styles.columnLeft}>
            <div className={styles.gallery}>
                <div className={`row ${styles.row}`}>
                    <figure className={styles.mainImage}>
                        <img
                            id="product-zoom"
                            src={activeImage}
                            alt="product image"
                        />
                        <Link href="#" className={styles.productGalleryLink}>
                            <FaExpandArrowsAlt />
                        </Link>
                    </figure>
                    <div className={styles.galleryItems}>
                        {productImages.map((image, index) => (
                            <Link
                                className={`${styles.galleryItem} ${
                                    image === activeImage ? styles.active : ""
                                }`}
                                href="#"
                                onClick={() => setActiveImage(image)}
                                key={index}
                            >
                                <img src={image} alt="product side" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
