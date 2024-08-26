import {
    IProductBrand,
    IProductCategory,
    IProductColor,
    IProductSize,
} from "@/interfaces/product.interface";

export interface IFilters {
    categories: IProductCategory[];
    sizes: IProductSize[];
    colour: IProductColor | null;
    brands: IProductBrand[];
    priceFrom: number;
    priceTo: number;
}
