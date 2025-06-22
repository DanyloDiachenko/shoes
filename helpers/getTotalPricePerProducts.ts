import { CalculatablePricePerProduct } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";
import { getTotalPricePerProduct } from "./getTotalPricePerProduct";

export const calculateTotalPricePerProducts = (
    products: CalculatablePricePerProduct[],
    currency: Currency
) => {
    let total = 0;

    for (let i = 0; i < products.length; i++) {
        total += getTotalPricePerProduct(products[i], currency);
    }

    return total;
};
