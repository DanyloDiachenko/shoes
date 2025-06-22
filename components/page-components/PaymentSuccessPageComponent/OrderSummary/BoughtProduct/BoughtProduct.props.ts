import { CartProduct } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";

export interface BoughtProductProps {
    product: CartProduct;
    currency: Currency;
}