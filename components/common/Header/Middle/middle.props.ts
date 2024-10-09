import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";

export interface MiddleProps {
    cartProducts: Product[];
    cookieProducts: ProductCookie[];
}
