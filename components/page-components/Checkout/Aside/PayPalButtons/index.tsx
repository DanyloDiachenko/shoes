import { PayPalButtons as PayPalButtonsComponent } from "@paypal/react-paypal-js";
import { PayPalButtonsProps } from "./payPalButtons.props";

export const PayPalButtons = ({ onPaymentClick, onPaymentSuccess, currency, total }: PayPalButtonsProps) => {
    return (
        <PayPalButtonsComponent
            onApprove={onPaymentSuccess}
            onClick={onPaymentClick}
            createOrder={(_, actions) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            amount: {
                                currency_code: currency.toUpperCase(),
                                value: total.toFixed(2),
                            },
                        },
                    ],
                    application_context: {
                        shipping_preference: "NO_SHIPPING",
                        user_action: "PAY_NOW",
                    },
                });
            }}
        />
    );
};
