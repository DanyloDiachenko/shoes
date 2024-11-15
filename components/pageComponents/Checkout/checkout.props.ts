import { Product } from "@/interfaces/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { User } from "@/interfaces/user.inteface";
import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";

export interface CheckoutProps {
    user: User;
    products: Product[];
    cookieProducts: CookieProduct[];
    currency: Currency;
    shippingType: ShippingType;
}
