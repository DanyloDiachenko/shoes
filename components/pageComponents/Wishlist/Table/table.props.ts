import { Product } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";

export interface TableProps {
    wishlistProductsServer: Product[];
    currency: Currency;
}
