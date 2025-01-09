import { Product } from "@/interfaces/product.interface";
import { TabSlug } from "../tabSlug.type";

export interface SliderProps {
    products: Product[];
    activeTabSlug: TabSlug;
}