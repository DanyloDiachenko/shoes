import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

export interface TableProps {
    cartProducts: IProduct[];
    currency: CurrencyType;
}
