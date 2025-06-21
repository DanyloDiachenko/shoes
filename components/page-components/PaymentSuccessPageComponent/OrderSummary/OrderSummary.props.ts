import { CartProduct } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";

export interface OrderSummaryProps {
    boughtProducts: CartProduct[];
    currency: Currency;
    shippingType: ShippingType;
}