import {
    IProductBrand,
    IProductCategoryWithProductsQuantity,
    IProductColor,
    IProductSize,
} from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

export interface FiltersProps {
    categoriesResponse: IProductCategoryWithProductsQuantity[];
    sizesResponse: IProductSize[];
    colorsResponse: IProductColor[];
    brandsResponse: IProductBrand[];
    serverCurrency: CurrencyType;
}
