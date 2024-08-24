import { DetailsBottom } from "./DetailsBottom";
import { DetailsTop } from "./DetailsTop";
import styles from "./styles.module.scss";

export const ProductPageContent = () => {
    return (
        <div className="page-content">
            <div className="container">
                <DetailsTop />
                <DetailsBottom />
                <h2 className="title text-center mb-4">You May Also Like</h2>
                <div
                    className="owl-carousel owl-simple carousel-equal-height carousel-with-shadow"
                    data-toggle="owl"
                    data-owl-options='{
                            "nav": false, 
                            "dots": true,
                            "margin": 20,
                            "loop": false,
                            "responsive": {
                                "0": {
                                    "items":1
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
                                    "nav": true,
                                    "dots": false
                                }
                            }
                        }'
                >
                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-new">New</span>
                            <a href="product.html">
                                <img
                                    src="assets/images/products/product-4.jpg"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </a>

                            <div className="product-action-vertical">
                                <a
                                    href="#"
                                    className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                    <span>add to wishlist</span>
                                </a>
                                <a
                                    href="popup/quickView.html"
                                    className="btn-product-icon btn-quickview"
                                    title="Quick view"
                                >
                                    <span>Quick view</span>
                                </a>
                                <a
                                    href="#"
                                    className="btn-product-icon btn-compare"
                                    title="Compare"
                                >
                                    <span>Compare</span>
                                </a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart">
                                    <span>add to cart</span>
                                </a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Women</a>
                            </div>
                            <h3 className="product-title">
                                <a href="product.html">
                                    Brown paperbag waist <br />
                                    pencil skirt
                                </a>
                            </h3>
                            <div className="product-price">$60.00</div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val"></div>
                                </div>
                                <span className="ratings-text">
                                    ( 2 Reviews )
                                </span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img
                                        src="assets/images/products/product-4-thumb.jpg"
                                        alt="product desc"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="assets/images/products/product-4-2-thumb.jpg"
                                        alt="product desc"
                                    />
                                </a>

                                <a href="#">
                                    <img
                                        src="assets/images/products/product-4-3-thumb.jpg"
                                        alt="product desc"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-out">
                                Out of Stock
                            </span>
                            <a href="product.html">
                                <img
                                    src="assets/images/products/product-6.jpg"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </a>

                            <div className="product-action-vertical">
                                <a
                                    href="#"
                                    className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                    <span>add to wishlist</span>
                                </a>
                                <a
                                    href="popup/quickView.html"
                                    className="btn-product-icon btn-quickview"
                                    title="Quick view"
                                >
                                    <span>Quick view</span>
                                </a>
                                <a
                                    href="#"
                                    className="btn-product-icon btn-compare"
                                    title="Compare"
                                >
                                    <span>Compare</span>
                                </a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart">
                                    <span>add to cart</span>
                                </a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Jackets</a>
                            </div>
                            <h3 className="product-title">
                                <a href="product.html">
                                    Khaki utility boiler jumpsuit
                                </a>
                            </h3>
                            <div className="product-price">
                                <span className="out-price">$120.00</span>
                            </div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val"></div>
                                </div>
                                <span className="ratings-text">
                                    ( 6 Reviews )
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <span className="product-label label-top">Top</span>
                            <a href="product.html">
                                <img
                                    src="assets/images/products/product-11.jpg"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </a>

                            <div className="product-action-vertical">
                                <a
                                    href="#"
                                    className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                    <span>add to wishlist</span>
                                </a>
                                <a
                                    href="popup/quickView.html"
                                    className="btn-product-icon btn-quickview"
                                    title="Quick view"
                                >
                                    <span>Quick view</span>
                                </a>
                                <a
                                    href="#"
                                    className="btn-product-icon btn-compare"
                                    title="Compare"
                                >
                                    <span>Compare</span>
                                </a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart">
                                    <span>add to cart</span>
                                </a>
                            </div>
                        </figure>
                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Shoes</a>
                            </div>
                            <h3 className="product-title">
                                <a href="product.html">
                                    Light brown studded Wide fit wedges
                                </a>
                            </h3>
                            <div className="product-price">$110.00</div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val"></div>
                                </div>
                                <span className="ratings-text">
                                    ( 1 Reviews )
                                </span>
                            </div>

                            <div className="product-nav product-nav-thumbs">
                                <a href="#" className="active">
                                    <img
                                        src="assets/images/products/product-11-thumb.jpg"
                                        alt="product desc"
                                    />
                                </a>
                                <a href="#">
                                    <img
                                        src="assets/images/products/product-11-2-thumb.jpg"
                                        alt="product desc"
                                    />
                                </a>

                                <a href="#">
                                    <img
                                        src="assets/images/products/product-11-3-thumb.jpg"
                                        alt="product desc"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="product.html">
                                <img
                                    src="assets/images/products/product-10.jpg"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </a>

                            <div className="product-action-vertical">
                                <a
                                    href="#"
                                    className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                    <span>add to wishlist</span>
                                </a>
                                <a
                                    href="popup/quickView.html"
                                    className="btn-product-icon btn-quickview"
                                    title="Quick view"
                                >
                                    <span>Quick view</span>
                                </a>
                                <a
                                    href="#"
                                    className="btn-product-icon btn-compare"
                                    title="Compare"
                                >
                                    <span>Compare</span>
                                </a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart">
                                    <span>add to cart</span>
                                </a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Jumpers</a>
                            </div>
                            <h3 className="product-title">
                                <a href="product.html">
                                    Yellow button front tea top
                                </a>
                            </h3>
                            <div className="product-price">$56.00</div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val"></div>
                                </div>
                                <span className="ratings-text">
                                    ( 0 Reviews )
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="product product-7 text-center">
                        <figure className="product-media">
                            <a href="product.html">
                                <img
                                    src="assets/images/products/product-7.jpg"
                                    alt="Product image"
                                    className="product-image"
                                />
                            </a>

                            <div className="product-action-vertical">
                                <a
                                    href="#"
                                    className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                    <span>add to wishlist</span>
                                </a>
                                <a
                                    href="popup/quickView.html"
                                    className="btn-product-icon btn-quickview"
                                    title="Quick view"
                                >
                                    <span>Quick view</span>
                                </a>
                                <a
                                    href="#"
                                    className="btn-product-icon btn-compare"
                                    title="Compare"
                                >
                                    <span>Compare</span>
                                </a>
                            </div>

                            <div className="product-action">
                                <a href="#" className="btn-product btn-cart">
                                    <span>add to cart</span>
                                </a>
                            </div>
                        </figure>

                        <div className="product-body">
                            <div className="product-cat">
                                <a href="#">Jeans</a>
                            </div>
                            <h3 className="product-title">
                                <a href="product.html">
                                    Blue utility pinafore denim dress
                                </a>
                            </h3>
                            <div className="product-price">$76.00</div>
                            <div className="ratings-container">
                                <div className="ratings">
                                    <div className="ratings-val"></div>
                                </div>
                                <span className="ratings-text">
                                    ( 2 Reviews )
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
