export const CartPageContent = () => {
    return (
        <div className="page-content">
            <div className="cart">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <table className="table table-cart table-mobile">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="product-col">
                                            <div className="product">
                                                <figure className="product-media">
                                                    <a href="#">
                                                        <img
                                                            src="/images/products/table/product-1.jpg"
                                                            alt="Product image"
                                                        />
                                                    </a>
                                                </figure>

                                                <h3 className="product-title">
                                                    <a href="#">
                                                        Beige knitted elastic
                                                        runner shoes
                                                    </a>
                                                </h3>
                                            </div>
                                        </td>
                                        <td className="price-col">$84.00</td>
                                        <td className="quantity-col">
                                            <div className="cart-product-quantity">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value="1"
                                                    min="1"
                                                    max="10"
                                                    step="1"
                                                    data-decimals="0"
                                                    required
                                                />
                                            </div>
                                        </td>
                                        <td className="total-col">$84.00</td>
                                        <td className="remove-col">
                                            <button className="btn-remove">
                                                <i className="icon-close"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="product-col">
                                            <div className="product">
                                                <figure className="product-media">
                                                    <a href="#">
                                                        <img
                                                            src="/images/products/table/product-2.jpg"
                                                            alt="Product image"
                                                        />
                                                    </a>
                                                </figure>

                                                <h3 className="product-title">
                                                    <a href="#">
                                                        Blue utility pinafore
                                                        denim dress
                                                    </a>
                                                </h3>
                                            </div>
                                        </td>
                                        <td className="price-col">$76.00</td>
                                        <td className="quantity-col">
                                            <div className="cart-product-quantity">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    value="1"
                                                    min="1"
                                                    max="10"
                                                    step="1"
                                                    data-decimals="0"
                                                    required
                                                />
                                            </div>
                                        </td>
                                        <td className="total-col">$76.00</td>
                                        <td className="remove-col">
                                            <button className="btn-remove">
                                                <i className="icon-close"></i>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="cart-bottom">
                                <div className="cart-discount">
                                    <form action="#">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                required
                                                placeholder="coupon code"
                                            />
                                            <div className="input-group-append">
                                                <button
                                                    className="btn btn-outline-primary-2"
                                                    type="submit"
                                                >
                                                    <i className="icon-long-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <a href="#" className="btn btn-outline-dark-2">
                                    <span>UPDATE CART</span>
                                    <i className="icon-refresh"></i>
                                </a>
                            </div>
                        </div>
                        <aside className="col-lg-3">
                            <div className="summary summary-cart">
                                <h3 className="summary-title">Cart Total</h3>
                                <table className="table table-summary">
                                    <tbody>
                                        <tr className="summary-subtotal">
                                            <td>Subtotal:</td>
                                            <td>$160.00</td>
                                        </tr>
                                        <tr className="summary-shipping">
                                            <td>Shipping:</td>
                                            <td>&nbsp;</td>
                                        </tr>

                                        <tr className="summary-shipping-row">
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input
                                                        type="radio"
                                                        id="free-shipping"
                                                        name="shipping"
                                                        className="custom-control-input"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="free-shipping"
                                                    >
                                                        Free Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>$0.00</td>
                                        </tr>
                                        <tr className="summary-shipping-row">
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input
                                                        type="radio"
                                                        id="standart-shipping"
                                                        name="shipping"
                                                        className="custom-control-input"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="standart-shipping"
                                                    >
                                                        Standart:
                                                    </label>
                                                </div>
                                            </td>
                                            <td>$10.00</td>
                                        </tr>

                                        <tr className="summary-shipping-row">
                                            <td>
                                                <div className="custom-control custom-radio">
                                                    <input
                                                        type="radio"
                                                        id="express-shipping"
                                                        name="shipping"
                                                        className="custom-control-input"
                                                    />
                                                    <label
                                                        className="custom-control-label"
                                                        htmlFor="express-shipping"
                                                    >
                                                        Express:
                                                    </label>
                                                </div>
                                            </td>
                                            <td>$20.00</td>
                                        </tr>
                                        <tr className="summary-shipping-estimate">
                                            <td>
                                                Estimate for Your Country
                                                <br />
                                                <a href="dashboard.html">
                                                    Change address
                                                </a>
                                            </td>
                                            <td>&nbsp;</td>
                                        </tr>

                                        <tr className="summary-total">
                                            <td>Total:</td>
                                            <td>$160.00</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <a
                                    href="checkout.html"
                                    className="btn btn-outline-primary-2 btn-order btn-block"
                                >
                                    PROCEED TO CHECKOUT
                                </a>
                            </div>

                            <a
                                href="category.html"
                                className="btn btn-outline-dark-2 btn-block mb-3"
                            >
                                <span>CONTINUE SHOPPING</span>
                                <i className="icon-refresh"></i>
                            </a>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};
