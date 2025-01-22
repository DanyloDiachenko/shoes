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
import { closePopup } from "@/store/slices/openedPopup";

export const QuickView = () => {
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.product.product);

    const [currency, setCurrency] = useState<Currency | null>(null);

    if (!product) return <></>;

    const [activeImage, setActiveImage] = useState<string>(product.mainImage);

    const closePopupHandler = () => {
        dispatch(closePopup());
    };

    useEffect(() => {
        if (!currency) {
            getCurrency().then((currency) => setCurrency(currency));
        }
    }, []);

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <span className={styles.tag}>{product.mainCategory.title}</span>
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
                            currency || "uah"
                        )}
                    </div>
                    <p className={styles.description}>{product.description}</p>
                    <div className={styles.inStock}>
                        <div className={styles.dot}></div>
                        {product.quantityInStock} in stock
                    </div>
                    <div className={styles.color}>
                        <div>Color: </div>
                        <Link
                            href={`/products?color=${product.color.slug}`}
                            className={styles.dot}
                            style={{ background: product.color.hexCode }}
                            onClick={closePopupHandler}
                        ></Link>
                    </div>
                    <div className={styles.sizes}>
                        Sizes:{" "}
                        {product.sizes.map((size, index) => (
                            <Link
                                key={index}
                                href={`/products?sizes=${size.slug}`}
                                onClick={closePopupHandler}
                            >
                                <span>{size.title}</span>
                                {index < product.sizes.length - 1 && ", "}
                            </Link>
                        ))}
                    </div>
                    <div className={styles.brand}>
                        Brand:{" "}
                        <Link
                            href={`/products?brands=${product.brand.slug}`}
                            onClick={closePopupHandler}
                        >
                            {product.brand.title}
                        </Link>
                    </div>
                    <div className={styles.categories}>
                        Categoreis:{" "}
                        {product.categories.map((category, index) => (
                            <span key={index}>
                                <Link
                                    href={`/products?categories=${category.slug}`}
                                    onClick={closePopupHandler}
                                >
                                    {category.title}
                                </Link>
                                {index < product.categories.length - 1 && ", "}
                            </span>
                        ))}
                    </div>
                    <div className={styles.buttonWrapper}>
                        <Link href={`/products/${product.id}`}>
                            <Button
                                colorType="btnPrimary"
                                onClick={closePopupHandler}
                            >
                                View Details
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
