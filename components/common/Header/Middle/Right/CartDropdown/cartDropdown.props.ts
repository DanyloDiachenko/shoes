import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";
import { Currency } from "@/types/currency.type";

export interface CartDropdownProps {
    currency: Currency;
    cartProducts: Product[];
    cookieProducts: ProductCookie[];
}
