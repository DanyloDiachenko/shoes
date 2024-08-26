import {
    IProductBrand,
    IProductCategory,
    IProductColor,
} from "@/interfaces/product.interface";

export interface IFilters {
    categories: IProductCategory[];
    sizes: number[];
    colour: IProductColor | null;
    brands: IProductBrand[];
    priceFrom: number;
    priceTo: number;
}
