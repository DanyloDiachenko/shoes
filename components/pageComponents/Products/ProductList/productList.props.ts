import { GetProductsResponse } from "@/interfaces/responses";
import { Currency } from "@/types/currency.type";

export interface ProductListProps {
    productsResponse: GetProductsResponse;
    currency: CurrencyType;
}