import { GetProductsResponse } from "@/api/products";
import { Currency } from "@/types/currency.type";

export interface ProductListProps {
    getProductsResponseServer: GetProductsResponse;
    currency: Currency;
}