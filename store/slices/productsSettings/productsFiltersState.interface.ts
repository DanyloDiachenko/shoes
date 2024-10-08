import {
    ProductBrand,
    ProductCategoryWithProductsQuantity,
    ProductColor,
    ProductSize,
} from "@/interfaces/product.interface";
import { SortProductsBy } from "@/types/sortProductsBy.type";
import { Range } from "react-input-range";

export interface ProductsSettingsState {
    pagination: {
        currentPage: number;
        totalPages: number;
    };
    filters: {
        categories: ProductCategoryWithProductsQuantity[];
        sizes: ProductSize[];
        color: ProductColor | null;
        brands: ProductBrand[];
        priceUah: Range;
        priceEur: Range;
        sortBy: SortProductsBy;
    };
}
