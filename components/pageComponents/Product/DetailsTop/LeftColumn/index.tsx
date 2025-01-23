"use client";

import styles from "./styles.module.scss";
import { useState } from "react";
import { LeftColumnProps } from "./leftColumn.props";
import Image from "next/image";

export const LeftColumn = ({ product }: LeftColumnProps) => {
    const [activeImage, setActiveImage] = useState<string>(product.mainImage);

    return (
        <div className={styles.columnLeft}>
            <div className={styles.gallery}>
                <div className={`row ${styles.row}`}>
                    <figure className={styles.mainImage}>
                        <Image
                            src={activeImage}
                            alt="product image"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
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
                                <Image src={image} alt="product side" width={0} height={0} sizes="100vw" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
