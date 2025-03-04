import { Product } from "@/interfaces/entities/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { Currency } from "@/types/currency.type";

export interface TableProps {
    cartProducts: Product[];
    cookieProducts: CookieProduct[];
    currency: Currency;
}
