import { Product } from "@/interfaces/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { Currency } from "@/types/currency.type";

export interface CartDropdownProps {
    currency: Currency;
    cartProducts: Product[];
    cookieProducts: CookieProduct[];
}
