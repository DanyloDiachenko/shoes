import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

export interface ProductRowProps {
    cartProduct: IProduct & {
        selectedSize: string;
        quantity: number;
        totalPrice: number;
    };
    currency: CurrencyType;
}
