import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { Product } from "@/interfaces/entities/product.interface";

export interface AddProductToCartProps {
    cookieProducts: CookieProduct[];
    product: Product;
}
