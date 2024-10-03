export const CartTotal = () => {
    return (
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
                                <br />{" "}
                                <a href="dashboard.html">Change address</a>
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
    );
};
