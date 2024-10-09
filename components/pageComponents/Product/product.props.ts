import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";
import { Currency } from "@/types/currency.type";

export interface ProductPageContentProps {
    product: Product;
    mayLikedProducts: Product[];
    currency: Currency;
    cookieProducts: ProductCookie[];
}
