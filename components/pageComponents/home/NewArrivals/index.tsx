export const NewArrivals = () => {
    return (
        <div className="bg-light pt-5 pb-10 mb-3">
            <div className="container">
                <div className="heading heading-center mb-3">
                    <h2 className="title-lg">New Arrivals</h2>
                    <ul
                        className="nav nav-pills justify-content-center"
                        role="tablist"
                    >
                        <li className="nav-item">
                            <a
                                className="nav-link active"
                                id="new-all-link"
                                data-toggle="tab"
                                href="#new-all-tab"
                                role="tab"
                                aria-controls="new-all-tab"
                                aria-selected="true"
                            >
                                All
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="new-women-link"
                                data-toggle="tab"
                                href="#new-women-tab"
                                role="tab"
                                aria-controls="new-women-tab"
                                aria-selected="false"
                            >
                                Women's
                            </a>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                id="new-men-link"
                                data-toggle="tab"
                                href="#new-men-tab"
                                role="tab"
                                aria-controls="new-men-tab"
                                aria-selected="false"
                            >
                                Men's
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content tab-content-carousel">
                    <div
                        className="tab-pane tab-pane-shadow p-0 fade show active"
                        id="new-all-tab"
                        role="tabpanel"
                        aria-labelledby="new-all-link"
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
                        >
                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        Sale
                                    </span>
                                    <span className="product-label label-sale">
                                        30% off
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-1.jpg"
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
                                    </div>
                                </figure>
                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Men’s</a>,
                                        <a href="#">Boots</a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="product.html">
                                            The North Face Back-To-Berkeley
                                            Remtlz Mesh
                                        </a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="new-price">
                                            Now $50.00
                                        </span>
                                        <span className="old-price">
                                            $84.00
                                        </span>
                                    </div>
                                </div>
                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "60%" }}
                                            ></div>
                                        </div>
                                        <span className="ratings-text">
                                            ( 4 Reviews )
                                        </span>
                                    </div>
                                    <div className="product-nav product-nav-dots">
                                        <a
                                            href="#"
                                            className="active"
                                            style={{ background: "#5f554b" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            style={{ background: "#806f55" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                    </div>
                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-2.jpg"
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
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Men’s</a>,
                                        <a href="#">Sneakers</a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Nike Air Zoom Wildhorse 4
                                        </a>
                                    </h3>
                                    <div className="product-price">$77.99</div>
                                </div>
                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "0%" }}
                                            ></div>
                                        </div>
                                        <span className="ratings-text">
                                            ( 0 Reviews )
                                        </span>
                                    </div>
                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        New
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-3.jpg"
                                            alt="Product image"
                                            className="product-image"
                                        />
                                        <img
                                            src="/images/demos/demo-10/products/product-3-2.jpg"
                                            alt="Product image"
                                            className="product-image-hover"
                                        />
                                    </a>

                                    <div className="product-action-vertical">
                                        <a
                                            href="#"
                                            className="btn-product-icon btn-wishlist btn-expandable"
                                        >
                                            <span>add to wishlist</span>
                                        </a>
                                    </div>
                                </figure>
                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Women’s</a>,
                                        <a href="#">Sandals</a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Eric Michael Joan
                                        </a>
                                    </h3>
                                    <div className="product-price">$35.99</div>
                                </div>
                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "40%" }}
                                            ></div>
                                        </div>
                                        <span className="ratings-text">
                                            ( 2 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a
                                            href="#"
                                            className="active"
                                            style={{ background: "#666666" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            style={{ background: "#b58853" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                    </div>
                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        Out Of Stock
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-4.jpg"
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
                                    </div>
                                </figure>
                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Women’s</a>,
                                        <a href="#">Sneakers</a>
                                    </div>
                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Nike Air Max Motion LW Racer
                                        </a>
                                    </h3>
                                    <div className="product-price">
                                        <span className="out-price">
                                            $54.99
                                        </span>
                                    </div>
                                </div>
                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "80%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 3 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        Sale
                                    </span>
                                    <span className="product-label label-sale">
                                        40% off
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-5.jpg"
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
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Men’s</a>,
                                        <a href="#">Sneakers</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            ASICS Tiger Gel-Lyte MT
                                        </a>
                                    </h3>

                                    <div className="product-price">
                                        <span className="new-price">
                                            Now $77.99
                                        </span>
                                        <span className="old-price">
                                            $130.00
                                        </span>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "0%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 0 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
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
                        >
                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        Out Of Stock
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-4.jpg"
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
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Women’s</a>,
                                        <a href="#">Sneakers</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Nike Air Max Motion LW Racer
                                        </a>
                                    </h3>

                                    <div className="product-price">
                                        <span className="out-price">
                                            $54.99
                                        </span>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "80%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 3 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        New
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-3.jpg"
                                            alt="Product image"
                                            className="product-image"
                                        />
                                        <img
                                            src="/images/demos/demo-10/products/product-3-2.jpg"
                                            alt="Product image"
                                            className="product-image-hover"
                                        />
                                    </a>

                                    <div className="product-action-vertical">
                                        <a
                                            href="#"
                                            className="btn-product-icon btn-wishlist btn-expandable"
                                        >
                                            <span>add to wishlist</span>
                                        </a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Women’s</a>,
                                        <a href="#">Sandals</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Eric Michael Joan
                                        </a>
                                    </h3>

                                    <div className="product-price">$35.99</div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "40%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 2 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a
                                            href="#"
                                            className="active"
                                            style={{ background: "#666666" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            style={{ background: "#b58853" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        Sale
                                    </span>
                                    <span className="product-label label-sale">
                                        40% off
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-5.jpg"
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
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Men’s</a>,
                                        <a href="#">Sneakers</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            ASICS Tiger Gel-Lyte MT
                                        </a>
                                    </h3>

                                    <div className="product-price">
                                        <span className="new-price">
                                            Now $77.99
                                        </span>
                                        <span className="old-price">
                                            $130.00
                                        </span>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "0%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 0 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        Sale
                                    </span>
                                    <span className="product-label label-sale">
                                        30% off
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-1.jpg"
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
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Men’s</a>,
                                        <a href="#">Boots</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            The North Face Back-To-Berkeley
                                            Remtlz Mesh
                                        </a>
                                    </h3>

                                    <div className="product-price">
                                        <span className="new-price">
                                            Now $50.00
                                        </span>
                                        <span className="old-price">
                                            $84.00
                                        </span>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "60%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 4 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a
                                            href="#"
                                            className="active"
                                            style={{ background: "#5f554b" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            style={{ background: "#806f55" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-2.jpg"
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
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Men’s</a>,
                                        <a href="#">Sneakers</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Nike Air Zoom Wildhorse 4
                                        </a>
                                    </h3>

                                    <div className="product-price">$77.99</div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "0%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 0 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="tab-pane tab-pane-shadow p-0 fade"
                        id="new-men-tab"
                        role="tabpanel"
                        aria-labelledby="new-men-link"
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
                        >
                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        Sale
                                    </span>
                                    <span className="product-label label-sale">
                                        40% off
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-5.jpg"
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
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Men’s</a>,
                                        <a href="#">Sneakers</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            ASICS Tiger Gel-Lyte MT
                                        </a>
                                    </h3>

                                    <div className="product-price">
                                        <span className="new-price">
                                            Now $77.99
                                        </span>
                                        <span className="old-price">
                                            $130.00
                                        </span>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "0%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 0 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        New
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-3.jpg"
                                            alt="Product image"
                                            className="product-image"
                                        />
                                        <img
                                            src="/images/demos/demo-10/products/product-3-2.jpg"
                                            alt="Product image"
                                            className="product-image-hover"
                                        />
                                    </a>

                                    <div className="product-action-vertical">
                                        <a
                                            href="#"
                                            className="btn-product-icon btn-wishlist btn-expandable"
                                        >
                                            <span>add to wishlist</span>
                                        </a>
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Women’s</a>,
                                        <a href="#">Sandals</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Eric Michael Joan
                                        </a>
                                    </h3>

                                    <div className="product-price">$35.99</div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "40%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 2 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-nav product-nav-dots">
                                        <a
                                            href="#"
                                            className="active"
                                            style={{ background: "#666666" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                        <a
                                            href="#"
                                            style={{ background: "#b58853" }}
                                        >
                                            <span className="sr-only">
                                                Color name
                                            </span>
                                        </a>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-2.jpg"
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
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Men’s</a>,
                                        <a href="#">Sneakers</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Nike Air Zoom Wildhorse 4
                                        </a>
                                    </h3>

                                    <div className="product-price">$77.99</div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "0%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 0 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="product product-3 text-center">
                                <figure className="product-media">
                                    <span className="product-label label-primary">
                                        Out Of Stock
                                    </span>
                                    <a href="product.html">
                                        <img
                                            src="/images/demos/demo-10/products/product-4.jpg"
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
                                    </div>
                                </figure>

                                <div className="product-body">
                                    <div className="product-cat">
                                        <a href="#">Women’s</a>,
                                        <a href="#">Sneakers</a>
                                    </div>

                                    <h3 className="product-title">
                                        <a href="product.html">
                                            Nike Air Max Motion LW Racer
                                        </a>
                                    </h3>

                                    <div className="product-price">
                                        <span className="out-price">
                                            $54.99
                                        </span>
                                    </div>
                                </div>

                                <div className="product-footer">
                                    <div className="ratings-container">
                                        <div className="ratings">
                                            <div
                                                className="ratings-val"
                                                style={{ width: "80%" }}
                                            ></div>
                                        </div>

                                        <span className="ratings-text">
                                            ( 3 Reviews )
                                        </span>
                                    </div>

                                    <div className="product-action">
                                        <a
                                            href="#"
                                            className="btn-product btn-cart"
                                        >
                                            <span>add to cart</span>
                                        </a>
                                        <a
                                            href="popup/quickView.html"
                                            className="btn-product btn-quickview"
                                        >
                                            <span>quick view</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
