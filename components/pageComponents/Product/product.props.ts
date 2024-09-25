import { IProduct } from "@/interfaces/product.interface";
import { IProductCookie } from "@/interfaces/productCookie.interface";
import { CurrencyType } from "@/types/currency.type";

export interface ProductPageContentProps {
    product: IProduct;
    mayLikedProducts: IProduct[];
    serverCurrency: CurrencyType;
    cookieProducts: IProductCookie[];
}
