import { Product } from "@/interfaces/entities/product.interface";
import { TabSlug } from "../../Tabs/tabSlug.type";
import { Currency } from "@/types/currency.type";

export interface SliderProps {
    products: Product[];
    activeTabSlug: TabSlug;
    currency: Currency;
}
