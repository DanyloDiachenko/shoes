import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";
import { User } from "@/interfaces/user.inteface";
import { Currency } from "@/types/currency.type";

export interface CartPageContentProps {
    cartProducts: Product[];
    cookieProducts: ProductCookie[];
    currency: Currency;
    user: User | null;
}
