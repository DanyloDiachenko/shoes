"use client";

import { getProductRating } from "@/helpers/getProductRating";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { LiaCartPlusSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";

const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={`${className} ${styles.arrowNext}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <IoIosArrowForward />
        </div>
    );
};

const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;

    return (
        <div
            className={`${className} ${styles.arrowPrev}`}
            style={{ ...style }}
            onClick={onClick}
        >
            <IoIosArrowBack />
        </div>
    );
};

const sliderSettings = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 0,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
            },
        },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

export const NewArrivals = () => {
    return (
        <div className={styles.newArrivals}>
            <div className="container">
                <div className={styles.heading}>
                    <h2 className={styles.title}>New Arrivals</h2>
                    <ul className={styles.nav} role="tablist">
                        <li className={styles.navItem}>
                            <Link
                                className={`${styles.navLink} ${styles.active}`}
                                id="new-all-link"
                                href="#new-all-tab"
                                role="tab"
                                aria-controls="new-all-tab"
                                aria-selected="true"
                            >
                                All
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                className={styles.navLink}
                                id="new-women-link"
                                href="#new-women-tab"
                                role="tab"
                                aria-controls="new-women-tab"
                                aria-selected="false"
                            >
                                Women's
                            </Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link
                                className={styles.navLink}
                                id="new-men-link"
                                href="#new-men-tab"
                                role="tab"
                                aria-controls="new-men-tab"
                                aria-selected="false"
                            >
                                Men's
                            </Link>
                        </li>
                    </ul>
                </div>
                <Slider
                    className={`new-arrivals-slider`}
                    aria-labelledby="new-all-link"
                    {...sliderSettings}
                >
                    <div className={styles.product}>
                        <figure className={styles.media}>
                            <span
                                className={`${styles.label} ${styles.labelPrimary}`}
                            >
                                Sale
                            </span>
                            <span
                                className={`${styles.label} ${styles.labelSale}`}
                            >
                                30% off
                            </span>
                            <Link
                                href="product.html"
                                className={styles.productLink}
                            >
                                <img
                                    src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </Link>
                            <div className={styles.actionVertical}>
                                <Link href={`/products/`}>
                                    <FaRegHeart />
                                    <span className="sr-only">
                                        add to wishlist
                                    </span>
                                </Link>
                            </div>
                        </figure>
                        <div className={styles.body}>
                            <div className={styles.category}>
                                <Link href="#">Men’s</Link>,
                                <Link href="#">Boots</Link>
                            </div>
                            <h3 className={styles.title}>
                                <Link href="product.html">
                                    The North Face Back-To-Berkeley Remtlz Mesh
                                </Link>
                            </h3>
                            <div className={styles.price}>
                                {true ? (
                                    <>
                                        <span className={styles.newPrice}>
                                            Now $50.00
                                        </span>
                                        <span className={styles.oldPrice}>
                                            $84.00
                                        </span>
                                    </>
                                ) : (
                                    <span className={styles.outPrice}>
                                        $54.99
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.ratingsContainer}>
                                {getProductRating(4)}
                                <span className={styles.ratingsText}>
                                    ( 4 Reviews )
                                </span>
                            </div>

                            <div className={styles.productNav}>
                                <Link
                                    href="#"
                                    className={styles.color}
                                    style={{ background: "#5f554b" }}
                                >
                                    <span className="sr-only">Color name</span>
                                </Link>
                            </div>
                            <div className={styles.actions}>
                                <Link href="#" className={styles.product}>
                                    <span>add to cart</span>
                                </Link>
                                <Link
                                    href="popup/quickView.html"
                                    className={styles.product}
                                >
                                    <span>quick view</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <figure className={styles.media}>
                            <span
                                className={`${styles.label} ${styles.labelPrimary}`}
                            >
                                Sale
                            </span>
                            <span
                                className={`${styles.label} ${styles.labelSale}`}
                            >
                                30% off
                            </span>
                            <Link
                                href="product.html"
                                className={styles.productLink}
                            >
                                <img
                                    src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </Link>
                            <div className={styles.actionVertical}>
                                <Link href={`/products/`}>
                                    <FaRegHeart />
                                    <span className="sr-only">
                                        add to wishlist
                                    </span>
                                </Link>
                            </div>
                        </figure>
                        <div className={styles.body}>
                            <div className={styles.category}>
                                <Link href="#">Men’s</Link>,
                                <Link href="#">Boots</Link>
                            </div>
                            <h3 className={styles.title}>
                                <Link href="product.html">
                                    The North Face Back-To-Berkeley Remtlz Mesh
                                </Link>
                            </h3>
                            <div className={styles.price}>
                                {true ? (
                                    <>
                                        <span className={styles.newPrice}>
                                            Now $50.00
                                        </span>
                                        <span className={styles.oldPrice}>
                                            $84.00
                                        </span>
                                    </>
                                ) : (
                                    <span className={styles.outPrice}>
                                        $54.99
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.ratingsContainer}>
                                {getProductRating(4)}
                                <span className={styles.ratingsText}>
                                    ( 4 Reviews )
                                </span>
                            </div>

                            <div className={styles.productNav}>
                                <Link
                                    href="#"
                                    className={styles.color}
                                    style={{ background: "#5f554b" }}
                                >
                                    <span className="sr-only">Color name</span>
                                </Link>
                            </div>
                            <div className={styles.actions}>
                                <Link href="#" className={styles.product}>
                                    <span>add to cart</span>
                                </Link>
                                <Link
                                    href="popup/quickView.html"
                                    className={styles.product}
                                >
                                    <span>quick view</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <figure className={styles.media}>
                            <span
                                className={`${styles.label} ${styles.labelPrimary}`}
                            >
                                Sale
                            </span>
                            <span
                                className={`${styles.label} ${styles.labelSale}`}
                            >
                                30% off
                            </span>
                            <Link
                                href="product.html"
                                className={styles.productLink}
                            >
                                <img
                                    src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </Link>
                            <div className={styles.actionVertical}>
                                <Link href={`/products/`}>
                                    <FaRegHeart />
                                    <span className="sr-only">
                                        add to wishlist
                                    </span>
                                </Link>
                            </div>
                        </figure>
                        <div className={styles.body}>
                            <div className={styles.category}>
                                <Link href="#">Men’s</Link>,
                                <Link href="#">Boots</Link>
                            </div>
                            <h3 className={styles.title}>
                                <Link href="product.html">
                                    The North Face Back-To-Berkeley Remtlz Mesh
                                </Link>
                            </h3>
                            <div className={styles.price}>
                                {true ? (
                                    <>
                                        <span className={styles.newPrice}>
                                            Now $50.00
                                        </span>
                                        <span className={styles.oldPrice}>
                                            $84.00
                                        </span>
                                    </>
                                ) : (
                                    <span className={styles.outPrice}>
                                        $54.99
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.ratingsContainer}>
                                {getProductRating(4)}
                                <span className={styles.ratingsText}>
                                    ( 4 Reviews )
                                </span>
                            </div>

                            <div className={styles.productNav}>
                                <Link
                                    href="#"
                                    className={styles.color}
                                    style={{ background: "#5f554b" }}
                                >
                                    <span className="sr-only">Color name</span>
                                </Link>
                            </div>
                            <div className={styles.actions}>
                                <Link href="#" className={styles.product}>
                                    <span>add to cart</span>
                                </Link>
                                <Link
                                    href="popup/quickView.html"
                                    className={styles.product}
                                >
                                    <span>quick view</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <figure className={styles.media}>
                            <span
                                className={`${styles.label} ${styles.labelPrimary}`}
                            >
                                Sale
                            </span>
                            <span
                                className={`${styles.label} ${styles.labelSale}`}
                            >
                                30% off
                            </span>
                            <Link
                                href="product.html"
                                className={styles.productLink}
                            >
                                <img
                                    src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </Link>
                            <div className={styles.actionVertical}>
                                <Link href={`/products/`}>
                                    <FaRegHeart />
                                    <span className="sr-only">
                                        add to wishlist
                                    </span>
                                </Link>
                            </div>
                        </figure>
                        <div className={styles.body}>
                            <div className={styles.category}>
                                <Link href="#">Men’s</Link>,
                                <Link href="#">Boots</Link>
                            </div>
                            <h3 className={styles.title}>
                                <Link href="product.html">
                                    The North Face Back-To-Berkeley Remtlz Mesh
                                </Link>
                            </h3>
                            <div className={styles.price}>
                                {true ? (
                                    <>
                                        <span className={styles.newPrice}>
                                            Now $50.00
                                        </span>
                                        <span className={styles.oldPrice}>
                                            $84.00
                                        </span>
                                    </>
                                ) : (
                                    <span className={styles.outPrice}>
                                        $54.99
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.ratingsContainer}>
                                {getProductRating(4)}
                                <span className={styles.ratingsText}>
                                    ( 4 Reviews )
                                </span>
                            </div>

                            <div className={styles.productNav}>
                                <Link
                                    href="#"
                                    className={styles.color}
                                    style={{ background: "#5f554b" }}
                                >
                                    <span className="sr-only">Color name</span>
                                </Link>
                            </div>
                            <div className={styles.actions}>
                                <Link href="#" className={styles.product}>
                                    <span>add to cart</span>
                                </Link>
                                <Link
                                    href="popup/quickView.html"
                                    className={styles.product}
                                >
                                    <span>quick view</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <figure className={styles.media}>
                            <span
                                className={`${styles.label} ${styles.labelPrimary}`}
                            >
                                Sale
                            </span>
                            <span
                                className={`${styles.label} ${styles.labelSale}`}
                            >
                                30% off
                            </span>
                            <Link
                                href="product.html"
                                className={styles.productLink}
                            >
                                <img
                                    src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </Link>
                            <div className={styles.actionVertical}>
                                <Link href={`/products/`}>
                                    <FaRegHeart />
                                    <span className="sr-only">
                                        add to wishlist
                                    </span>
                                </Link>
                            </div>
                        </figure>
                        <div className={styles.body}>
                            <div className={styles.category}>
                                <Link href="#">Men’s</Link>,
                                <Link href="#">Boots</Link>
                            </div>
                            <h3 className={styles.title}>
                                <Link href="product.html">
                                    The North Face Back-To-Berkeley Remtlz Mesh
                                </Link>
                            </h3>
                            <div className={styles.price}>
                                {true ? (
                                    <>
                                        <span className={styles.newPrice}>
                                            Now $50.00
                                        </span>
                                        <span className={styles.oldPrice}>
                                            $84.00
                                        </span>
                                    </>
                                ) : (
                                    <span className={styles.outPrice}>
                                        $54.99
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.ratingsContainer}>
                                {getProductRating(4)}
                                <span className={styles.ratingsText}>
                                    ( 4 Reviews )
                                </span>
                            </div>

                            <div className={styles.productNav}>
                                <Link
                                    href="#"
                                    className={styles.color}
                                    style={{ background: "#5f554b" }}
                                >
                                    <span className="sr-only">Color name</span>
                                </Link>
                            </div>
                            <div className={styles.actions}>
                                <Link href="#" className={styles.product}>
                                    <span>add to cart</span>
                                </Link>
                                <Link
                                    href="popup/quickView.html"
                                    className={styles.product}
                                >
                                    <span>quick view</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <figure className={styles.media}>
                            <span
                                className={`${styles.label} ${styles.labelPrimary}`}
                            >
                                Sale
                            </span>
                            <span
                                className={`${styles.label} ${styles.labelSale}`}
                            >
                                30% off
                            </span>
                            <Link
                                href="product.html"
                                className={styles.productLink}
                            >
                                <img
                                    src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </Link>
                            <div className={styles.actionVertical}>
                                <Link href={`/products/`}>
                                    <FaRegHeart />
                                    <span className="sr-only">
                                        add to wishlist
                                    </span>
                                </Link>
                            </div>
                        </figure>
                        <div className={styles.body}>
                            <div className={styles.category}>
                                <Link href="#">Men’s</Link>,
                                <Link href="#">Boots</Link>
                            </div>
                            <h3 className={styles.title}>
                                <Link href="product.html">
                                    The North Face Back-To-Berkeley Remtlz Mesh
                                </Link>
                            </h3>
                            <div className={styles.price}>
                                {true ? (
                                    <>
                                        <span className={styles.newPrice}>
                                            Now $50.00
                                        </span>
                                        <span className={styles.oldPrice}>
                                            $84.00
                                        </span>
                                    </>
                                ) : (
                                    <span className={styles.outPrice}>
                                        $54.99
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.ratingsContainer}>
                                {getProductRating(4)}
                                <span className={styles.ratingsText}>
                                    ( 4 Reviews )
                                </span>
                            </div>

                            <div className={styles.productNav}>
                                <Link
                                    href="#"
                                    className={styles.color}
                                    style={{ background: "#5f554b" }}
                                >
                                    <span className="sr-only">Color name</span>
                                </Link>
                            </div>
                            <div className={styles.actions}>
                                <Link href="#" className={styles.product}>
                                    <span>add to cart</span>
                                </Link>
                                <Link
                                    href="popup/quickView.html"
                                    className={styles.product}
                                >
                                    <span>quick view</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.product}>
                        <figure className={styles.media}>
                            <span
                                className={`${styles.label} ${styles.labelPrimary}`}
                            >
                                Sale
                            </span>
                            <span
                                className={`${styles.label} ${styles.labelSale}`}
                            >
                                30% off
                            </span>
                            <Link
                                href="product.html"
                                className={styles.productLink}
                            >
                                <img
                                    src="https://nike.in.ua/image/cache/catalog/image/cache/catalog/image/catalog/image/nike/airmax/plus-tn/S-56201/32241-375x467.webp"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </Link>
                            <div className={styles.actionVertical}>
                                <Link href={`/products/`}>
                                    <FaRegHeart />
                                    <span className="sr-only">
                                        add to wishlist
                                    </span>
                                </Link>
                            </div>
                        </figure>
                        <div className={styles.body}>
                            <div className={styles.category}>
                                <Link href="#">Men’s</Link>,
                                <Link href="#">Boots</Link>
                            </div>
                            <h3 className={styles.title}>
                                <Link href="product.html">
                                    The North Face Back-To-Berkeley Remtlz Mesh
                                </Link>
                            </h3>
                            <div className={styles.price}>
                                {true ? (
                                    <>
                                        <span className={styles.newPrice}>
                                            Now $50.00
                                        </span>
                                        <span className={styles.oldPrice}>
                                            $84.00
                                        </span>
                                    </>
                                ) : (
                                    <span className={styles.outPrice}>
                                        $54.99
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className={styles.footer}>
                            <div className={styles.ratingsContainer}>
                                {getProductRating(4)}
                                <span className={styles.ratingsText}>
                                    ( 4 Reviews )
                                </span>
                            </div>

                            <div className={styles.productNav}>
                                <Link
                                    href="#"
                                    className={styles.color}
                                    style={{ background: "#5f554b" }}
                                >
                                    <span className="sr-only">Color name</span>
                                </Link>
                            </div>
                            <div className={styles.actions}>
                                <Link href="#" className={styles.product}>
                                    <span>add to cart</span>
                                </Link>
                                <Link
                                    href="popup/quickView.html"
                                    className={styles.product}
                                >
                                    <span>quick view</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
                {/* <div
                        className="tab-pane tab-pane-shadow p-0 fade"
                        id="new-women-tab"
                        role="tabpanel"
                        aria-labelledby="new-women-link"
                    >
                        <div
                            className="owl-carousel owl-simple carousel-equal-height"
                            data-toggle="owl"
                            data-owl-options='{
                                    "nav": false, 
                                    "dots": true,
                                    "margin": 0,
                                    "loop": false,
                                    "responsive": {
                                        "0": {
                                            "items":2
                                        },
                                        "480": {
                                            "items":2
                                        },
                                        "768": {
                                            "items":3
                                        },
                                        "992": {
                                            "items":4
                                        },
                                        "1200": {
                                            "items":4,
                                            "nav": true
                                        }
                                    }
                                }'
                        ></div>
                    </div> */}
            </div>
        </div>
    );
};
