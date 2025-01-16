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
import Link from "next/link";
import { Button } from "@/components/UI/Button";

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
                    <p className={styles.description}>{product.description}</p>
                    <div className={styles.color}>
                        Color:{" "}
                        <span
                            style={{ background: product.color.hexCode }}
                        ></span>
                    </div>
                    <div className={styles.sizes}>
                        Sizes:{" "}
                        {product.sizes.map((size, index) => (
                            <span key={index}>
                                <span>{size.title}</span>
                                {index < product.sizes.length - 1 && ", "}
                            </span>
                        ))}
                    </div>
                    <div className={styles.inStock}>
                        {product.quantityInStock} in stock
                    </div>
                    <div className={styles.brand}>
                        Brand:{" "}
                        <Link href={`/products/${product.brand.slug}`}>
                            {product.brand.title}
                        </Link>
                    </div>
                    <div className={styles.categories}>
                        Categoreis:{" "}
                        {product.categories.map((category, index) => (
                            <span key={index}>
                                <Link href={`/products/${category.slug}`}>
                                    {category.title}
                                </Link>
                                {index < product.categories.length - 1 && ", "}
                            </span>
                        ))}
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Button colorType="btnPrimary">View Details</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
