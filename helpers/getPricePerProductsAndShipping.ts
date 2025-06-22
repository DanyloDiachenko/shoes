import { CalculatablePricePerProduct } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";
import { calculateTotalPricePerProducts } from "./getTotalPricePerProducts";
import { getPricePerShipping } from "./getPricePerShipping";

export const getPricePerProductsAndShipping = (
    boughtProducts: CalculatablePricePerProduct[],
    shippingType: ShippingType,
    currency: Currency
) => {
    return (
        calculateTotalPricePerProducts(boughtProducts, currency) +
        getPricePerShipping(currency, shippingType)
    );
};
