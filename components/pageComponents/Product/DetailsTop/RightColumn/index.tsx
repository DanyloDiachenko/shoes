import { getRating } from "@/helpers/getRating";
import styles from "./styles.module.scss";

export const ProductDetailsTopRightColumn = () => {
    return (
        <div className={styles.columnRight}>
            <div className={styles.details}>
                <h1 className={styles.title}>
                    Dark yellow lace cut out swing dress
                </h1>

                <div className={styles.ratingsContainer}>
                    {getRating(4)}
                    <a
                        className={styles.ratingsText}
                        href="#product-review-link"
                    >
                        ( 2 Reviews )
                    </a>
                </div>
                <div className={styles.price}>$84.00</div>
                <div className={styles.description}>
                    <p>
                        Sed egestas, ante et vulputate volutpat, eros pede
                        semper est, vitae luctus metus libero eu augue. Morbi
                        purus libero, faucibus adipiscing. Sed lectus.
                    </p>
                </div>
                <div className={styles.detailsFilters}>
                    <label>Color:</label>
                    <div className={styles.colors}>
                        <a href="#" className={styles.active}>
                            <img
                                src="/images/banners/product-details.png"
                                alt="product desc"
                            />
                        </a>
                        <a href="#">
                            <img
                                src="/images/banners/product-details.png"
                                alt="product desc"
                            />
                        </a>
                    </div>
                    =
                </div>
                <div className={styles.sizes}>
                    <label htmlFor="size">Size:</label>
                    <div className="select-custom">
                        <select name="size" id="size" className="form-control">
                            <option value="#" selected={true}>
                                Select a size
                            </option>
                            <option value="s">Small</option>
                            <option value="m">Medium</option>
                            <option value="l">Large</option>
                            <option value="xl">Extra Large</option>
                        </select>
                    </div>

                    <a href="#" className="size-guide">
                        <i className="icon-th-list"></i>size guide
                    </a>
                </div>

                <div className="details-filter-row details-row-size">
                    <label htmlFor="qty">Qty:</label>
                    <div className="product-details-quantity">
                        <input
                            type="number"
                            id="qty"
                            className="form-control"
                            value="1"
                            min="1"
                            max="10"
                            step="1"
                            data-decimals="0"
                            required
                        />
                    </div>
                </div>

                <div className="product-details-action">
                    <a href="#" className="btn-product btn-cart">
                        <span>add to cart</span>
                    </a>

                    <div className="details-action-wrapper">
                        <a
                            href="#"
                            className="btn-product btn-wishlist"
                            title="Wishlist"
                        >
                            <span>Add to Wishlist</span>
                        </a>
                        <a
                            href="#"
                            className="btn-product btn-compare"
                            title="Compare"
                        >
                            <span>Add to Compare</span>
                        </a>
                    </div>
                </div>

                <div className="product-details-footer">
                    <div className="product-cat">
                        <span>Category:</span>
                        <a href="#">Women</a>,<a href="#">Dresses</a>,
                        <a href="#">Yellow</a>
                    </div>
                    <div className="social-icons social-icons-sm">
                        <span className="social-label">Share:</span>
                        <a
                            href="#"
                            className="social-icon"
                            title="Facebook"
                            target="_blank"
                        >
                            <i className="icon-facebook-f"></i>
                        </a>
                        <a
                            href="#"
                            className="social-icon"
                            title="Twitter"
                            target="_blank"
                        >
                            <i className="icon-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className="social-icon"
                            title="Instagram"
                            target="_blank"
                        >
                            <i className="icon-instagram"></i>
                        </a>
                        <a
                            href="#"
                            className="social-icon"
                            title="Pinterest"
                            target="_blank"
                        >
                            <i className="icon-pinterest"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
