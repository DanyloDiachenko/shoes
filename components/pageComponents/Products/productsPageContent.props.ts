import { ProductCategoryWithProductsQuantity } from "@/interfaces/entities/product.interface";
import { Size } from "@/interfaces/entities/size.interface";
import { Color } from "@/interfaces/entities/color.interface";
import { Brand } from "@/interfaces/entities/brand.interface";
import { GetProductsResponse } from "@/interfaces/responses/products.interface";
import { Currency } from "@/types/currency.type";

export interface ProductsPageContentProps {
    getProductsResponseServer: GetProductsResponse;
    getCategoriesResponseServer: ProductCategoryWithProductsQuantity[];
    getSizesResponseServer: Size[];
    getColorsResponseServer: Color[];
    getBrandsResponseServer: Brand[];
    currency: Currency;
}
