import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

export interface YouMayAlsoLikeProps {
    products: IProduct[];
    serverCurrency: CurrencyType;
}