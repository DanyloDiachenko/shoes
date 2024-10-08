import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";

export interface AddProductToCartProps {
    cookieProducts: ProductCookie[];
    product: Product;
}
