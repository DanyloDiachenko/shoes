import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

export interface StickyProductProps {
    product: IProduct;
    serverCurrency: CurrencyType;
}