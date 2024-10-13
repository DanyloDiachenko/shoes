import { Product } from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";

export interface ProductRowProps {
    cartProduct: Product & {
        selectedSize: string;
        quantity: number;
        totalPrice: number;
    };
    currency: Currency;
}
