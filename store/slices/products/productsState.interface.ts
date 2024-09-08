import {
    IProductBrand,
    IProductCategoryWithProductsQuantity,
    IProductColor,
    IProductSize,
} from "@/interfaces/product.interface";
import { PopupType } from "@/types/popup.type";
import { SortProductsByType } from "@/types/sortProductsBy.type";
import { Range } from "react-input-range";

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
        priceUah: Range;
        priceEur: Range;
        sortBy: SortProductsByType;
    };
}
