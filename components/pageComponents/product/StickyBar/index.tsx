export const StickyBar = () => {
    return (
        <div className="sticky-bar">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <figure className="product-media">
                            <a href="product.html">
                                <img
                                    src="/images/products/sticky/product-1.jpg"
                                    alt="Product image"
                                />
                            </a>
                        </figure>
                        <h4 className="product-title">
                            <a href="product.html">
                                Dark yellow lace cut out swing dress
                            </a>
                        </h4>
                    </div>

                    <div className="col-6 justify-content-end">
                        <div className="product-price">$84.00</div>
                        <div className="product-details-quantity">
                            <input
                                type="number"
                                id="sticky-cart-qty"
                                className="form-control"
                                value="1"
                                min="1"
                                max="10"
                                step="1"
                                data-decimals="0"
                                required
                            />
                        </div>

                        <div className="product-details-action">
                            <a href="#" className="btn-product btn-cart">
                                <span>add to cart</span>
                            </a>
                            <a
                                href="#"
                                className="btn-product btn-wishlist"
                                title="Wishlist"
                            >
                                <span>Add to Wishlist</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
