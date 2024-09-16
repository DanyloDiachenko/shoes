"use client";

import Link from "next/link";
import styles from "./styles.module.scss";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { useState } from "react";
import { LeftColumnProps } from "./leftColumn.props";

export const LeftColumn = ({ product }: LeftColumnProps) => {
    const [activeImage, setActiveImage] = useState<string>(product.mainImage);

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
                        <div className={styles.productGalleryLink}>
                            <FaExpandArrowsAlt />
                        </div>
                    </figure>
                    <div className={styles.galleryItems}>
                        {product.images.map((image) => (
                            <div
                                className={`${styles.galleryItem} ${
                                    image === activeImage ? styles.active : ""
                                }`}
                                onClick={() => setActiveImage(image)}
                                key={image}
                            >
                                <img src={image} alt="product side" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
