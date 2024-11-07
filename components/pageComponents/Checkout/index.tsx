import { Aside } from "./Aside";
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
                        <Aside />
                    </div>
                </form>
            </div>
        </div>
    );
};
