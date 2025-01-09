import { Product } from "@/interfaces/product.interface";
import { TabSlug } from "../tabSlug.type";
import { Currency } from "@/types/currency.type";

export interface SliderProps {
    products: Product[];
    activeTabSlug: TabSlug;
    currency: Currency;
}