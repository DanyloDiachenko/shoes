import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";
import { Currency } from "@/types/currency.type";

export interface CartPageContentProps {
    cartProducts: Product[];
    cookieProducts: ProductCookie[];
    currency: Currency;
}
