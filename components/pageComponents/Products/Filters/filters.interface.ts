import {
    ProductBrand,
    ProductCategory,
    ProductColor,
} from "@/interfaces/product.interface";

export interface IFilters {
    categories: ProductCategory[];
    sizes: number[];
    colour: ProductColor | null;
    brands: ProductBrand[];
    priceFrom: number;
    priceTo: number;
}
