import { GetProductsResponse } from "@/interfaces/responses";
import { CurrencyType } from "@/types/currency.type";

export interface ProductListProps {
    productsResponse: GetProductsResponse;
    serverCurrency: CurrencyType;
}