import { Product } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";

export interface PriceProps {
    currency: Currency;
    product: Product;
}
