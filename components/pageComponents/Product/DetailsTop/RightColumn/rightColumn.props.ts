import { IProduct } from "@/interfaces/product.interface";
import { IProductCookie } from "@/interfaces/productCookie.interface";

export interface RightColumnProps {
    product: IProduct;
    cookieProducts: IProductCookie[];
}
