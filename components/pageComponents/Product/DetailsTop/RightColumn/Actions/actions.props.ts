import { IProduct } from "@/interfaces/product.interface";
import { IProductCookie } from "@/interfaces/productCookie.interface";

export interface ActionsProps {
    product: IProduct;
    cookieProducts: IProductCookie[];
}
