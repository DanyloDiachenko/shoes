"use client";

import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import Image from "next/image";

export const QuickView = () => {
    const dispatch = useDispatch();
    const product = useSelector((state: RootState) => state.product.product);

    if (!product) return null;

    return (
        <div className={styles.contentWrapper}>
            <div className={styles.content}>
                <span className={styles.tag}>Sale!</span>
                <div className={styles.leftColumn}>
                    <div className={styles.mainImage}>
                        <Image
                            src={product.mainImage}
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
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.rightColumn}></div>
            </div>
        </div>
    );
};
