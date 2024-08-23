import Link from "next/link";
import styles from "./styles.module.scss";

export const DetailsTopLeftColumn = () => {
    return (
        <div className={styles.columnLeft}>
            <div className={styles.gallery}>
                <div className="row">
                    <figure className={styles.mainImage}>
                        <img
                            id="product-zoom"
                            src="/images/banners/product-details.png"
                            alt="product image"
                        />
                        <Link href="#" className={styles.productGallery}>
                            <i className="icon-arrows"></i>
                        </Link>
                    </figure>
                    <div className={styles.galleryItems}>
                        <a
                            className={`${styles.galleryItem} ${styles.active}`}
                            href="#"
                        >
                            <img
                                src="/images/banners/product-details.png"
                                alt="product side"
                            />
                        </a>
                        <a className={`${styles.galleryItem}`} href="#">
                            <img
                                src="/images/banners/product-details.png"
                                alt="product side"
                            />
                        </a>
                        <a className={`${styles.galleryItem}`} href="#">
                            <img
                                src="/images/banners/product-details.png"
                                alt="product side"
                            />
                        </a>
                        <a className={`${styles.galleryItem}`} href="#">
                            <img
                                src="/images/banners/product-details.png"
                                alt="product side"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
