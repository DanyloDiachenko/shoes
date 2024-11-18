import { Product } from "@/interfaces/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { Currency } from "@/types/currency.type";
import { Payment } from "@/types/payment.type";
import { ShippingType } from "@/types/shipping.type";
import { FormEvent } from "react";

export interface AsideProps {
    paymentMethod: Payment | null;
    setPaymentMethod: (paymentMethod: Payment | null) => void;
    products: Product[];
    cookieProducts: CookieProduct[];
    currency: Currency;
    shippingType: ShippingType;
    onPlaceOrderClick: (e: FormEvent) => void;
}
