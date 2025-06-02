import { Product } from "@/interfaces/entities/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";

export interface StickyProductProps {
    product: Product;
    cookieProducts: CookieProduct[];
}
