import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";

export interface PaymentState {
    payment: {
        amount: number;
        currency: Currency;
        cart: { productId: string; quantity: number; size: string }[];
        orderNotes?: string;
        shippingType: ShippingType;
    } | null;
}
