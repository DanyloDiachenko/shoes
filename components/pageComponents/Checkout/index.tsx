import { Coupon } from "./Coupon";
import { Form } from "./Form";

export const CheckoutPageComponent = () => {
    return (
        <div className="page-content">
            <div className="container">
                <Coupon />
                <form action="#">
                    <div className="row">
                        <Form />
                        <aside className="col-lg-3">
                            <div className="summary">
                                <h3 className="summary-title">Your Order</h3>

                                <table className="table table-summary">
                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <a href="#">
                                                    Beige knitted elastic runner
                                                    shoes
                                                </a>
                                            </td>
                                            <td>$84.00</td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <a href="#">
                                                    Blue utility pinafore
                                                    denimdress
                                                </a>
                                            </td>
                                            <td>$76,00</td>
                                        </tr>
                                        <tr className="summary-subtotal">
                                            <td>Subtotal:</td>
                                            <td>$160.00</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping:</td>
                                            <td>Free shipping</td>
                                        </tr>
                                        <tr className="summary-total">
                                            <td>Total:</td>
                                            <td>$160.00</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div
                                    className="accordion-summary"
                                    id="accordion-payment"
                                >
                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading-1"
                                        >
                                            <h2 className="card-title">
                                                <a
                                                    role="button"
                                                    data-toggle="collapse"
                                                    href="#collapse-1"
                                                    aria-expanded="true"
                                                    aria-controls="collapse-1"
                                                >
                                                    Direct bank transfer
                                                </a>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapse-1"
                                            className="collapse show"
                                            aria-labelledby="heading-1"
                                            data-parent="#accordion-payment"
                                        >
                                            <div className="card-body">
                                                Make your payment directly into
                                                our bank account. Please use
                                                your Order ID as the payment
                                                reference. Your order will not
                                                be shipped until the funds have
                                                cleared in our account.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading-2"
                                        >
                                            <h2 className="card-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-toggle="collapse"
                                                    href="#collapse-2"
                                                    aria-expanded="false"
                                                    aria-controls="collapse-2"
                                                >
                                                    Check payments
                                                </a>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapse-2"
                                            className="collapse"
                                            aria-labelledby="heading-2"
                                            data-parent="#accordion-payment"
                                        >
                                            <div className="card-body">
                                                Ipsum dolor sit amet,
                                                consectetuer adipiscing elit.
                                                Donec odio. Quisque volutpat
                                                mattis eros. Nullam malesuada
                                                erat ut turpis.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading-3"
                                        >
                                            <h2 className="card-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-toggle="collapse"
                                                    href="#collapse-3"
                                                    aria-expanded="false"
                                                    aria-controls="collapse-3"
                                                >
                                                    Cash on delivery
                                                </a>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapse-3"
                                            className="collapse"
                                            aria-labelledby="heading-3"
                                            data-parent="#accordion-payment"
                                        >
                                            <div className="card-body">
                                                Quisque volutpat mattis eros.
                                                Lorem ipsum dolor sit amet,
                                                consectetuer adipiscing elit.
                                                Donec odio. Quisque volutpat
                                                mattis eros.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading-4"
                                        >
                                            <h2 className="card-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-toggle="collapse"
                                                    href="#collapse-4"
                                                    aria-expanded="false"
                                                    aria-controls="collapse-4"
                                                >
                                                    PayPal{" "}
                                                    <small className="float-right paypal-link">
                                                        What is PayPal?
                                                    </small>
                                                </a>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapse-4"
                                            className="collapse"
                                            aria-labelledby="heading-4"
                                            data-parent="#accordion-payment"
                                        >
                                            <div className="card-body">
                                                Nullam malesuada erat ut turpis.
                                                Suspendisse urna nibh, viverra
                                                non, semper suscipit, posuere a,
                                                pede. Donec nec justo eget felis
                                                facilisis fermentum.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card">
                                        <div
                                            className="card-header"
                                            id="heading-5"
                                        >
                                            <h2 className="card-title">
                                                <a
                                                    className="collapsed"
                                                    role="button"
                                                    data-toggle="collapse"
                                                    href="#collapse-5"
                                                    aria-expanded="false"
                                                    aria-controls="collapse-5"
                                                >
                                                    Credit Card (Stripe)
                                                    <img
                                                        src="assets/images/payments-summary.png"
                                                        alt="payments cards"
                                                    />
                                                </a>
                                            </h2>
                                        </div>
                                        <div
                                            id="collapse-5"
                                            className="collapse"
                                            aria-labelledby="heading-5"
                                            data-parent="#accordion-payment"
                                        >
                                            <div className="card-body">
                                                {" "}
                                                Donec nec justo eget felis
                                                facilisis fermentum.Lorem ipsum
                                                dolor sit amet, consectetuer
                                                adipiscing elit. Donec odio.
                                                Quisque volutpat mattis eros.
                                                Lorem ipsum dolor sit ame.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-outline-primary-2 btn-order btn-block"
                                >
                                    <span className="btn-text">
                                        Place Order
                                    </span>
                                    <span className="btn-hover-text">
                                        Proceed to Checkout
                                    </span>
                                </button>
                            </div>
                        </aside>
                    </div>
                </form>
            </div>
        </div>
    );
};
