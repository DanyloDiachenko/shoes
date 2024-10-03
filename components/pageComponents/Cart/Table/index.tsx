export const Table = () => {
    return (
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
                                            src="assets/images/products/table/product-1.jpg"
                                            alt="Product image"
                                        />
                                    </a>
                                </figure>

                                <h3 className="product-title">
                                    <a href="#">
                                        Beige knitted elastic runner shoes
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
                                            src="assets/images/products/table/product-2.jpg"
                                            alt="Product image"
                                        />
                                    </a>
                                </figure>

                                <h3 className="product-title">
                                    <a href="#">
                                        Blue utility pinafore denim dress
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
    );
};
