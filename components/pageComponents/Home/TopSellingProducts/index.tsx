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
                                                src="assets/images/demos/demo-10/products/product-5.jpg"
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
