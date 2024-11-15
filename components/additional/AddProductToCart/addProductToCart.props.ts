import { Product } from "@/interfaces/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";

export interface AddProductToCartProps {
    cookieProducts: CookieProduct[];
    product: Product;
}
