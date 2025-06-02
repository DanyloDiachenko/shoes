import {
    ProductCategoryWithProductsQuantity,
} from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";
import { Brand } from "@/interfaces/entities/brand.interface";
import { Color } from "@/interfaces/entities/color.interface";
import { Size } from "@/interfaces/entities/size.interface";

export interface FiltersProps {
    getCategoriesResponseServer: ProductCategoryWithProductsQuantity[];
    getSizesResponseServer: Size[];
    getColorsResponseServer: Color[];
    getBrandsResponseServer: Brand[];
    currency: Currency;
}
