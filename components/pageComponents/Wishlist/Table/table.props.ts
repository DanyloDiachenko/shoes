import { Product } from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";

export interface TableProps {
    wishlistProductsServer: Product[];
    currency: Currency;
}
