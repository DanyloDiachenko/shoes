import {
    IProduct,
    IProductCategoryWithProductsQuantity,
} from "./product.interface";

export interface GetProductsResponse {
    data: IProduct[];
    totalPages: number;
}
