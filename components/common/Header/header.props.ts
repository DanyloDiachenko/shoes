import { IProduct } from "@/interfaces/product.interface";
import { IProductCookie } from "@/interfaces/productCookie.interface";
import { CurrencyType } from "@/types/currency.type";

export interface HeaderProps {
    currency: CurrencyType;
    cartProducts: IProduct[];
    cookieProducts: IProductCookie[];
}