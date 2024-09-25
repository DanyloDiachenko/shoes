import { IProduct } from "@/interfaces/product.interface";
import { IProductCookie } from "@/interfaces/productCookie.interface";

export interface DetailsTopProps {
    product: IProduct;
    cookieProducts: IProductCookie[];
}
