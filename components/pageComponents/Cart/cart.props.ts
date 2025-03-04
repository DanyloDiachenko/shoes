import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { Product } from "@/interfaces/entities/product.interface";
import { User } from "@/interfaces/entities/user.inteface";
import { Currency } from "@/types/currency.type";

export interface CartPageContentProps {
    cartProducts: Product[];
    cookieProducts: CookieProduct[];
    currency: Currency;
    user: User | null;
}
