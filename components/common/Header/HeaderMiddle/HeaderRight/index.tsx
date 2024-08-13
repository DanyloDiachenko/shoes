import Link from "next/link";

export const HeaderRight = () => {
    return (
        <div className="header-right">
            <div className="header-search">
                <Link
                    href="#"
                    className="search-toggle"
                    role="button"
                    title="Search"
                >
                    <i className="icon-search"></i>
                </Link>
                <form action="#" method="get">
                    <div className="header-search-wrapper">
                        <label htmlFor="q" className="sr-only">
                            Search
                        </label>
                        <input
                            type="search"
                            className="form-control"
                            name="q"
                            id="q"
                            placeholder="Search in..."
                            required
                        />
                    </div>
                </form>
            </div>
            <div className="dropdown compare-dropdown">
                <Link
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                    title="Compare Products"
                    aria-label="Compare Products"
                >
                    <i className="icon-random"></i>
                </Link>

                <div className="dropdown-menu dropdown-menu-right">
                    <ul className="compare-products">
                        <li className="compare-product">
                            <Link
                                href="#"
                                className="btn-remove"
                                title="Remove Product"
                            >
                                <i className="icon-close"></i>
                            </Link>
                            <h4 className="compare-product-title">
                                <Link href="product.html">
                                    Blue Night Dress
                                </Link>
                            </h4>
                        </li>
                        <li className="compare-product">
                            <Link
                                href="#"
                                className="btn-remove"
                                title="Remove Product"
                            >
                                <i className="icon-close"></i>
                            </Link>
                            <h4 className="compare-product-title">
                                <Link href="product.html">
                                    White Long Skirt
                                </Link>
                            </h4>
                        </li>
                    </ul>

                    <div className="compare-actions">
                        <Link href="#" className="action-link">
                            Clear All
                        </Link>
                        <Link href="#" className="btn btn-outline-primary-2">
                            <span>Compare</span>
                            <i className="icon-long-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="dropdown cart-dropdown">
                <Link
                    href="#"
                    className="dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    data-display="static"
                >
                    <i className="icon-shopping-cart"></i>
                    <span className="cart-count">2</span>
                </Link>

                <div className="dropdown-menu dropdown-menu-right">
                    <div className="dropdown-cart-products">
                        <div className="product">
                            <div className="product-cart-details">
                                <h4 className="product-title">
                                    <Link href="product.html">
                                        Beige knitted elastic runner shoes
                                    </Link>
                                </h4>

                                <span className="cart-product-info">
                                    <span className="cart-product-qty">1</span>x
                                    $84.00
                                </span>
                            </div>

                            <figure className="product-image-container">
                                <Link
                                    href="product.html"
                                    className="product-image"
                                >
                                    <img
                                        src="/images/products/cart/product-1.jpg"
                                        alt="product"
                                    />
                                </Link>
                            </figure>
                            <Link
                                href="#"
                                className="btn-remove"
                                title="Remove Product"
                            >
                                <i className="icon-close"></i>
                            </Link>
                        </div>

                        <div className="product">
                            <div className="product-cart-details">
                                <h4 className="product-title">
                                    <Link href="product.html">
                                        Blue utility pinafore denim dress
                                    </Link>
                                </h4>

                                <span className="cart-product-info">
                                    <span className="cart-product-qty">1</span>x
                                    $76.00
                                </span>
                            </div>

                            <figure className="product-image-container">
                                <Link
                                    href="product.html"
                                    className="product-image"
                                >
                                    <img
                                        src="/images/products/cart/product-2.jpg"
                                        alt="product"
                                    />
                                </Link>
                            </figure>
                            <Link
                                href="#"
                                className="btn-remove"
                                title="Remove Product"
                            >
                                <i className="icon-close"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="dropdown-cart-total">
                        <span>Total</span>

                        <span className="cart-total-price">$160.00</span>
                    </div>

                    <div className="dropdown-cart-action">
                        <Link href="cart.html" className="btn btn-primary">
                            View Cart
                        </Link>
                        <Link
                            href="checkout.html"
                            className="btn btn-outline-primary-2"
                        >
                            <span>Checkout</span>
                            <i className="icon-long-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
