import Link from "next/link";

export const CartDropdown = () => {
    return (
        <div className="dropdown cart-dropdown">
            <Link href="#" className="dropdown-toggle" role="button">
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
                            <Link href="product.html" className="product-image">
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
                            <Link href="product.html" className="product-image">
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
    );
}