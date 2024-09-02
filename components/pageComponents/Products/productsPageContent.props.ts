import { IProductCategoryWithProductsQuantity, IProductSize } from "@/interfaces/product.interface";
import { GetProductsResponse } from "@/interfaces/responses";


export interface ProductsPageContentProps {
    productsResponse: GetProductsResponse;
    categoriesResponse: IProductCategoryWithProductsQuantity[];
    sizesResponse: IProductSize[];
}
