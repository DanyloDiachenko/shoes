import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

export interface ProductPageContentProps {
    product: IProduct;
    mayLikedProducts: IProduct[];
    serverCurrency: CurrencyType;
}
