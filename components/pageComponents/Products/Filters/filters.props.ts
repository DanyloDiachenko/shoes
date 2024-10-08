import {
    ProductBrand,
    ProductCategoryWithProductsQuantity,
    ProductColor,
    ProductSize,
} from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";

export interface FiltersProps {
    getCategoriesResponseServer: ProductCategoryWithProductsQuantity[];
    getSizesResponseServer: ProductSize[];
    getColorsResponseServer: ProductColor[];
    getBrandsResponseServer: ProductBrand[];
    currency: Currency;
}
