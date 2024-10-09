import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";

export interface StickyProductProps {
    product: Product;
    cookieProducts: ProductCookie[];
}
