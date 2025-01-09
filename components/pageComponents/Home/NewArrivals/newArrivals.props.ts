import { Product } from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";

export interface NewArrivalsProps {
    products: Product[];
    currency: Currency;
}
