import { Product } from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";

export interface ProductRowProps {
    product: Product;
    onProductRemoveClick: (productId: string) => void;
    currency: Currency;
}