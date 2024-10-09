import { Product } from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";

export interface ProductSlideProps extends Product {
    currency: Currency;
}
