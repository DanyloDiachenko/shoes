import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";

export interface TableProps {
    cartProducts: Product[];
    cookieProducts: ProductCookie[];
}
