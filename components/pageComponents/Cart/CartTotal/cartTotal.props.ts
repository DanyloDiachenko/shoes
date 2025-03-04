import { Product } from "@/interfaces/entities/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { User } from "@/interfaces/entities/user.inteface";
import { Currency } from "@/types/currency.type";

export interface CartTotalProps {
    currency: Currency;
    cartProducts: Product[];
    cookieProducts: CookieProduct[];
    user: User | null;
}
