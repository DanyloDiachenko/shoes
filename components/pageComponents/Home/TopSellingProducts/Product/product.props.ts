import { Product } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";

export interface ProductProps extends Product {
    currency: Currency;
}
