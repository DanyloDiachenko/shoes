import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";
import { Currency } from "@/types/currency.type";
import { Payment } from "@/types/payment.type";

export interface AsideProps {
    paymentMethod: Payment | null;
    setPaymentMethod: (paymentMethod: Payment | null) => void;
    products: Product[];
    cookieProducts: ProductCookie[];
    currency: Currency;
}
