import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

export interface CartPageContentProps {
    cartProducts: IProduct[];
    currency: CurrencyType;
}
