import {
    IProductBrand,
    IProductCategoryWithProductsQuantity,
    IProductColor,
    IProductSize,
} from "@/interfaces/product.interface";
import { PopupType } from "@/types/popup.type";

export interface IProductsState {
    pagination: {
        currentPage: number;
        totalPages: number;
    };
    filters: {
        categories: IProductCategoryWithProductsQuantity[];
        sizes: IProductSize[];
        colour: IProductColor | null;
        brands: IProductBrand[];
        priceFrom: number;
        priceTo: number;
    };
}
