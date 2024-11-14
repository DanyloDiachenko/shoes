import { Aside } from "./Aside";
import { CheckoutProps } from "./checkout.props";
import { Coupon } from "./Coupon";
import { Form } from "./Form";

export const CheckoutPageComponent = ({ user }: CheckoutProps) => {
    return (
        <div className="page-content">
            <div className="container">
                <Coupon />
                <form action="#">
                    <div className="row">
                        <Form user={user} />
                        <Aside />
                    </div>
                </form>
            </div>
        </div>
    );
};
