import {
    ProductBrand,
    ProductCategoryWithProductsQuantity,
    ProductColor,
    ProductSize,
} from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";

export interface FiltersProps {
    categoriesResponse: ProductCategoryWithProductsQuantity[];
    sizesResponse: ProductSize[];
    colorsResponse: ProductColor[];
    brandsResponse: ProductBrand[];
    currency: Currency;
}
