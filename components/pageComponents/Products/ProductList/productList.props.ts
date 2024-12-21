import { GetProductsResponse } from "@/interfaces/responses/products.interface";
import { Currency } from "@/types/currency.type";

export interface ProductListProps {
    getProductsResponseServer: GetProductsResponse;
    currency: Currency;
}