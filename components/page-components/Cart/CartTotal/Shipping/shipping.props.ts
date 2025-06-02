import { Shipping } from "@/interfaces/shipping.interface";
import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";

export interface ShippingProps {
    shippings: Shipping[];
    shippingType: ShippingType;
    onShippingTypeChange: (shipping: ShippingType) => void;
    currency: Currency;
    subtotal: number;
}
