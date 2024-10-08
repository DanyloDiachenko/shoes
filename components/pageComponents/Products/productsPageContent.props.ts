import {
    ProductBrand,
    ProductCategoryWithProductsQuantity,
    ProductColor,
    ProductSize,
} from "@/interfaces/product.interface";
import { GetProductsResponse } from "@/interfaces/responses";
import { Currency } from "@/types/currency.type";

export interface ProductsPageContentProps {
    getProductsResponseServer: GetProductsResponse;
    getCategoriesResponseServer: ProductCategoryWithProductsQuantity[];
    getSizesResponseServer: ProductSize[];
    getColorsResponseServer: ProductColor[];
    getBrandsResponseServer: ProductBrand[];
    currency: Currency;
}
