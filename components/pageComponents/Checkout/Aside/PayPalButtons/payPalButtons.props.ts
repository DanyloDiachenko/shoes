import { Currency } from "@/types/currency.type";
import { PayPalButtonsComponentProps } from "@paypal/react-paypal-js";

export interface PayPalButtonsProps {
    onPaymentSuccess: PayPalButtonsComponentProps["onApprove"];
    onPaymentClick: () => void;
    currency: Currency;
    total: number;
}