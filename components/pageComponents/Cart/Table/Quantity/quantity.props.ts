import { IProduct } from "@/interfaces/product.interface";
import { IProductCookie } from "@/interfaces/productCookie.interface";

export interface QuantityProps {
    quantity: number;
    cookieProducts: IProductCookie[];
    product: IProduct;
}
