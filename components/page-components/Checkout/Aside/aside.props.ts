import { Product } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";
import { PayPalButtonsComponentProps } from "@paypal/react-paypal-js";

export interface AsideProps {
    products: Product[];
    currency: Currency;
    shippingType: ShippingType;
    onPaymentSuccess: PayPalButtonsComponentProps["onApprove"];
    onPaymentClick: () => void;
    getProductPrice: (product: Product) => number;
    subtotal: number;
    shippingPrice: number;
    total: number;
}
