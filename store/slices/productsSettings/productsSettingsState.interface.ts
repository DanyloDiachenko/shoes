import { Brand } from "@/interfaces/entities/brand.interface";
import { Color } from "@/interfaces/entities/color.interface";
import {
    ProductCategoryWithProductsQuantity,
} from "@/interfaces/entities/product.interface";
import { Size } from "@/interfaces/entities/size.interface";
import { SortProductsBy } from "@/types/sortProductsBy.type";
import { Range } from "react-input-range";

export interface ProductsSettingsState {
    pagination: {
        currentPage: number;
        totalPages: number;
    };
    filters: {
        categories: ProductCategoryWithProductsQuantity[];
        sizes: Size[];
        color: Color | null;
        brands: Brand[];
        priceUah: Range;
        priceEur: Range;
        sortBy: SortProductsBy;
    };
}
