import { Product } from "../product.interface";

export interface GetProductsResponse {
    data: Product[];
    total: number;
    totalPages: number;
    count: number;
    page: number;
    limit: number;
}
