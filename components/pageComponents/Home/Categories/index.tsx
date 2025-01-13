import Link from "next/link";
import styles from "./styles.module.scss";
import { customCategories } from "./customCategories";
import Image from "next/image";

export const Categories = () => {
    return (
        <div className={`${styles.categories} container`}>
            <div className={`${styles.row} row`}>
                {customCategories.map((category, index) => (
                    <div className={styles.column} key={index}>
                        <div className={styles.banner}>
                            <Link href={category.link}>
                                <Image
                                    src={category.image}
                                    alt="Banner"
                                    width={376}
                                    height={280}
                                />
                            </Link>
                            <div className={styles.bannerContent}>
                                <h3 className={styles.bannerTitle}>
                                    {category.title}
                                </h3>
                                <h4 className={styles.bannerSubtitle}>
                                    {category.productsQuantity} Products
                                </h4>
                                <Link
                                    href={category.link}
                                    className={styles.bannerLink}
                                >
                                    SHOP NOW
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
