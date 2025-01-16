"use client";

import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getProductRating } from "@/helpers/getProductRating";
import { getProductPrice } from "@/helpers/getProductPrice";
import { Currency } from "@/types/currency.type";
import { getCurrency } from "@/helpers/getCurrency";

export const QuickView = () => {
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.product.product);

    const [currency, setCurrency] = useState<Currency>("uah");

    if (!product) return null;

    const [activeImage, setActiveImage] = useState<string>(product.mainImage);

    useEffect(() => {
        getCurrency().then((currency) => setCurrency(currency));
    });

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <span className={styles.tag}>Sale!</span>
                <div className={styles.leftColumn}>
                    <div className={styles.mainImage}>
                        <Image
                            src={activeImage}
                            alt="Product image"
                            width={0}
                            height={0}
                            sizes="100vw"
                        />
                    </div>
                    <div className={styles.nav}>
                        {product.images.slice(0, 4).map((image, index) => (
                            <div key={index} className={styles.navImage}>
                                <Image
                                    src={image}
                                    alt="Product image"
                                    width={0}
                                    height={0}
                                    sizes="100vw"
                                    onClick={() => setActiveImage(image)}
                                    className={
                                        activeImage === image
                                            ? styles.active
                                            : ""
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.ratingsContainer}>
                        <div className={styles.ratings}>
                            {getProductRating(product.rating)}
                        </div>
                        <span className={styles.ratingsText}>
                            ( {product.reviews.length} Reviews )
                        </span>
                    </div>
                    <div className={styles.price}>
                        {getProductPrice(
                            product.priceUah,
                            product.priceEur,
                            product.priceWithDiscountUah,
                            product.priceWithDiscountEur,
                            currency
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
