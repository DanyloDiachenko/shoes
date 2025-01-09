import { Product } from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";

export interface NewArrivalsProps {
    newArrivalProductsAll: Product[];
    newArrivalProductsMen: Product[];
    newArrivalProductsWomen: Product[];
    currency: Currency;
}
