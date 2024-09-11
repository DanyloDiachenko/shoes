import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

export interface ProductProps extends IProduct {
    serverCurrency: CurrencyType;
}