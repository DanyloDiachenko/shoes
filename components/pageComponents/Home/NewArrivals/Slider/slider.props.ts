import { Product } from "@/interfaces/product.interface";

export interface SliderProps {
    products: Product[];
    activeTabSlug: string;
}