import {
    IProductBrand,
    IProductCategoryWithProductsQuantity,
    IProductColor,
    IProductSize,
} from "@/interfaces/product.interface";
import { PopupType } from "@/types/popup.type";
import { SortProductsByType } from "@/types/sortProductsBy.type";

export interface IProductsState {
    pagination: {
        currentPage: number;
        totalPages: number;
    };
    filters: {
        categories: IProductCategoryWithProductsQuantity[];
        sizes: IProductSize[];
        color: IProductColor | null;
        brands: IProductBrand[];
        priceFrom: number;
        priceTo: number;
        sortBy: SortProductsByType;
    };
}
