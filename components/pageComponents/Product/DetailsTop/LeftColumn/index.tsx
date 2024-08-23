"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { useState } from "react";

interface ProductImage {
    id: number;
    url: string;
}

const productImages: ProductImage[] = [
    { id: 1, url: "/images/banners/product-details.png" },
    { id: 2, url: "/images/banners/product-details.png" },
    { id: 3, url: "/images/banners/product-details.png" },
    { id: 4, url: "/images/banners/product-details.png" },
];

export const ProductDetailsTopLeftColumn = () => {
    const [activeImageId, setActiveImageId] = useState<number>(
        productImages[0].id
    );

    return (
        <div className={styles.columnLeft}>
            <div className={styles.gallery}>
                <div className={`row ${styles.row}`}>
                    <figure className={styles.mainImage}>
                        <img
                            id="product-zoom"
                            src={
                                productImages.find(
                                    (img) => img.id === activeImageId
                                )?.url
                            }
                            alt="product image"
                        />
                        <Link href="#" className={styles.productGalleryLink}>
                            <FaExpandArrowsAlt />
                        </Link>
                    </figure>
                    <div className={styles.galleryItems}>
                        {productImages.map((image) => (
                            <Link
                                className={`${styles.galleryItem} ${
                                    image.id === activeImageId
                                        ? styles.active
                                        : ""
                                }`}
                                href="#"
                                onClick={() => setActiveImageId(image.id)}
                                key={image.id}
                            >
                                <img src={image.url} alt="product side" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
