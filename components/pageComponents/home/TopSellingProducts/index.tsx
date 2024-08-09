export const TopSellingProducts = () => {
    return (
        <div className="container">
            <div className="heading heading-center mb-3">
                <h2 className="title-lg mb-2">Top Selling Products</h2>
                <ul
                    className="nav nav-pills justify-content-center"
                    role="tablist"
                >
                    <li className="nav-item">
                        <a
                            className="nav-link active"
                            id="top-all-link"
                            data-toggle="tab"
                            href="#top-all-tab"
                            role="tab"
                            aria-controls="top-all-tab"
                            aria-selected="true"
                        >
                            All
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            id="top-women-link"
                            data-toggle="tab"
                            href="#top-women-tab"
                            role="tab"
                            aria-controls="top-women-tab"
                            aria-selected="false"
                        >
                            Women's
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            id="top-men-link"
                            data-toggle="tab"
                            href="#top-men-tab"
                            role="tab"
                            aria-controls="top-men-tab"
                            aria-selected="false"
                        >
                            Men's
                        </a>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div
                    className="tab-pane p-0 fade show active"
                    id="top-all-tab"
                    role="tabpanel"
                    aria-labelledby="top-all-link"
                >
                    <div className="products just-action-icons-sm">
                        <div className="row">
                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
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
                                                src="/images/demos/demo-10/products/product-5.jpg"
                                                alt="Product image"
                                                className="product-image"
                                            />
                                        </a>

                                        <div className="product-countdown-container">
                                            <span className="product-contdown-title">
                                                offer ends in:
                                            </span>
                                            <div
                                                className="product-countdown countdown-compact"
                                                data-until="2019, 11, 3"
                                                data-compact="true"
                                            ></div>
                                        </div>

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
                                                style={{
                                                    background: "#af5f23",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#806f55",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#333333",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">
                                            New
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-6.jpg"
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
                                            <a href="#">Sandals</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Eric Michael Sandra
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $42.99
                                        </div>
                                    </div>

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div
                                                    style={{ width: "60%" }}
                                                    className="ratings-val"
                                                ></div>
                                            </div>

                                            <span className="ratings-text">
                                                ( 2 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-7.jpg"
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
                                            <a href="#">Heels</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Jessica Simpson Blayke
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $20.99
                                        </div>
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
                                                style={{
                                                    background: "#cc6666",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#ccccff",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-8.jpg"
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
                                                Native Shoes Miles Denim Print
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $20.99
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

                                        <div className="product-nav product-nav-dots">
                                            <a
                                                href="#"
                                                className="active"
                                                style={{
                                                    background: "#ffca51",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#bb8379",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#666666",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-9.jpg"
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
                                            <a href="#">Boots</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                The North Face Raedonda Boot
                                                Sneaker
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $97.99
                                        </div>
                                    </div>

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div
                                                    className="ratings-val"
                                                    style={{ width: "100%" }}
                                                ></div>
                                            </div>

                                            <span className="ratings-text">
                                                ( 4 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-10.jpg"
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
                                                Native Shoes Miles Denim Print
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $57.99
                                        </div>
                                    </div>

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div
                                                    className="ratings-val"
                                                    style={{ width: "100%" }}
                                                ></div>
                                            </div>

                                            <span className="ratings-text">
                                                ( 4 Reviews )
                                            </span>
                                        </div>
                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-11.jpg"
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
                                            <a href="#">Boots</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Splendid Roselyn II
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $97.99
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

                                        <div className="product-nav product-nav-dots">
                                            <a
                                                href="#"
                                                className="active"
                                                style={{
                                                    background: "#78645f",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#b89474",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#666666",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">
                                            Sale
                                        </span>
                                        <span className="product-label label-sale">
                                            55% off
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-12.jpg"
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
                                            <a href="#">Heels</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Marc Jacobs Somewhere Sport
                                                Sandal
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            <span className="new-price">
                                                Now $125.99
                                            </span>
                                            <span className="old-price">
                                                $275.00
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">
                                            New
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-13.jpg"
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
                                            <a href="#">Mules</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Crocs Crocband Clog
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $25.75
                                        </div>
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
                                                ( 7 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-14.jpg"
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
                                                Vasque Sundowner GTX
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $109.99
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
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
                <div
                    className="tab-pane p-0 fade"
                    id="top-women-tab"
                    role="tabpanel"
                    aria-labelledby="top-women-link"
                >
                    <div className="products just-action-icons-sm">
                        <div className="row">
                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-8.jpg"
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
                                                Native Shoes Miles Denim Print
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $20.99
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

                                        <div className="product-nav product-nav-dots">
                                            <a
                                                href="#"
                                                className="active"
                                                style={{
                                                    background: "#ffca51",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#bb8379",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#666666",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-10.jpg"
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
                                                Native Shoes Miles Denim Print
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $57.99
                                        </div>
                                    </div>

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div
                                                    className="ratings-val"
                                                    style={{ width: "100%" }}
                                                ></div>
                                            </div>

                                            <span className="ratings-text">
                                                ( 4 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-11.jpg"
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
                                            <a href="#">Boots</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Splendid Roselyn II
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $97.99
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

                                        <div className="product-nav product-nav-dots">
                                            <a
                                                href="#"
                                                className="active"
                                                style={{
                                                    background: "#78645f",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#b89474",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#666666",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">
                                            New
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-6.jpg"
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
                                            <a href="#">Sandals</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Eric Michael Sandra
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $42.99
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
                                                ( 2 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
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
                                                src="/images/demos/demo-10/products/product-5.jpg"
                                                alt="Product image"
                                                className="product-image"
                                            />
                                        </a>

                                        <div className="product-countdown-container">
                                            <span className="product-contdown-title">
                                                offer ends in:
                                            </span>
                                            <div
                                                className="product-countdown countdown-compact"
                                                data-until="2019, 11, 3"
                                                data-compact="true"
                                            ></div>
                                        </div>

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
                                                style={{
                                                    background: "#af5f23",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#806f55",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#333333",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-9.jpg"
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
                                            <a href="#">Boots</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                The North Face Raedonda Boot
                                                Sneaker
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $97.99
                                        </div>
                                    </div>

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div
                                                    className="ratings-val"
                                                    style={{ width: "100%" }}
                                                ></div>
                                            </div>

                                            <span className="ratings-text">
                                                ( 4 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-7.jpg"
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
                                            <a href="#">Heels</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Jessica Simpson Blayke
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $20.99
                                        </div>
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
                                                style={{
                                                    background: "#cc6666",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#ccccff",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">
                                            Sale
                                        </span>
                                        <span className="product-label label-sale">
                                            55% off
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-12.jpg"
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
                                            <a href="#">Heels</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Marc Jacobs Somewhere Sport
                                                Sandal
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            <span className="new-price">
                                                Now $125.99
                                            </span>
                                            <span className="old-price">
                                                $275.00
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">
                                            New
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-13.jpg"
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
                                            <a href="#">Mules</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Crocs Crocband Clog
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $25.75
                                        </div>
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
                                                ( 7 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-14.jpg"
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
                                                Vasque Sundowner GTX
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $109.99
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
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

                <div
                    className="tab-pane p-0 fade"
                    id="top-men-tab"
                    role="tabpanel"
                    aria-labelledby="top-men-link"
                >
                    <div className="products just-action-icons-sm">
                        <div className="row">
                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-10.jpg"
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
                                                Native Shoes Miles Denim Print
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $57.99
                                        </div>
                                    </div>

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div
                                                    className="ratings-val"
                                                    style={{ width: "100%" }}
                                                ></div>
                                            </div>

                                            <span className="ratings-text">
                                                ( 4 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
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
                                                src="/images/demos/demo-10/products/product-5.jpg"
                                                alt="Product image"
                                                className="product-image"
                                            />
                                        </a>

                                        <div className="product-countdown-container">
                                            <span className="product-contdown-title">
                                                offer ends in:
                                            </span>
                                            <div
                                                className="product-countdown countdown-compact"
                                                data-until="2019, 11, 3"
                                                data-compact="true"
                                            ></div>
                                        </div>

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
                                                style={{
                                                    background: "#af5f23",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#806f55",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#333333",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-11.jpg"
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
                                            <a href="#">Boots</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Splendid Roselyn II
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $97.99
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

                                        <div className="product-nav product-nav-dots">
                                            <a
                                                href="#"
                                                className="active"
                                                style={{
                                                    background: "#78645f",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#b89474",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#666666",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">
                                            New
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-6.jpg"
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
                                            <a href="#">Sandals</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Eric Michael Sandra
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $42.99
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
                                                ( 2 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-7.jpg"
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
                                            <a href="#">Heels</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Jessica Simpson Blayke
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $20.99
                                        </div>
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
                                                style={{
                                                    background: "#cc6666",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#ccccff",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-8.jpg"
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
                                                Native Shoes Miles Denim Print
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $20.99
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

                                        <div className="product-nav product-nav-dots">
                                            <a
                                                href="#"
                                                className="active"
                                                style={{
                                                    background: "#ffca51",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#bb8379",
                                                }}
                                            >
                                                <span className="sr-only">
                                                    Color name
                                                </span>
                                            </a>
                                            <a
                                                href="#"
                                                style={{
                                                    background: "#666666",
                                                }}
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-9.jpg"
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
                                            <a href="#">Boots</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                The North Face Raedonda Boot
                                                Sneaker
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $97.99
                                        </div>
                                    </div>

                                    <div className="product-footer">
                                        <div className="ratings-container">
                                            <div className="ratings">
                                                <div
                                                    className="ratings-val"
                                                    style={{ width: "100%" }}
                                                ></div>
                                            </div>

                                            <span className="ratings-text">
                                                ( 4 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-14.jpg"
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
                                                Vasque Sundowner GTX
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $109.99
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">
                                            Sale
                                        </span>
                                        <span className="product-label label-sale">
                                            55% off
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-12.jpg"
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
                                            <a href="#">Heels</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Marc Jacobs Somewhere Sport
                                                Sandal
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            <span className="new-price">
                                                Now $125.99
                                            </span>
                                            <span className="old-price">
                                                $275.00
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
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
                                            >
                                                <span>quick view</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-6 col-md-4 col-lg-3 col-xl-5col">
                                <div className="product product-3 text-center">
                                    <figure className="product-media">
                                        <span className="product-label label-primary">
                                            New
                                        </span>
                                        <a href="product.html">
                                            <img
                                                src="/images/demos/demo-10/products/product-13.jpg"
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
                                            <a href="#">Mules</a>
                                        </div>

                                        <h3 className="product-title">
                                            <a href="product.html">
                                                Crocs Crocband Clog
                                            </a>
                                        </h3>

                                        <div className="product-price">
                                            $25.75
                                        </div>
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
                                                ( 7 Reviews )
                                            </span>
                                        </div>

                                        <div className="product-action">
                                            <a
                                                href="#"
                                                className="btn-product btn-cart"
                                                title="Add to cart"
                                            >
                                                <span>add to cart</span>
                                            </a>
                                            <a
                                                href="popup/quickView.html"
                                                className="btn-product btn-quickview"
                                                title="Quick view"
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
            <div className="more-container text-center mt-5">
                <a
                    href="category.html"
                    className="btn btn-outline-lightgray btn-more btn-round"
                >
                    <span>View more products</span>
                    <i className="icon-long-arrow-right"></i>
                </a>
            </div>
        </div>
    );
};
