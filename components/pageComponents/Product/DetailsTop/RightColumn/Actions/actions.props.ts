import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";

export interface ActionsProps {
    product: Product;
    cookieProducts: ProductCookie[];
}
