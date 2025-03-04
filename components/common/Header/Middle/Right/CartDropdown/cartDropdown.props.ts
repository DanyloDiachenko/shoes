import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { Product } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";

export interface CartDropdownProps {
    currency: Currency;
    cartProducts: Product[];
    cookieProducts: CookieProduct[];
}
