import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";

export interface ProductSlideProps extends IProduct {
    serverCurrency: CurrencyType;
}
