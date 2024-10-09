import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";

export interface HeaderProps {
    cartProducts: Product[];
    cookieProducts: ProductCookie[];
}