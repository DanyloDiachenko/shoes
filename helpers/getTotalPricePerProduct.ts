import { CalculatablePricePerProduct } from "@/interfaces/entities/product.interface";
import { Currency } from "@/types/currency.type";

export const getTotalPricePerProduct = (
    cartProduct: CalculatablePricePerProduct,
    currency: Currency
) => {
    const pricePerProductUah =
        cartProduct.priceWithDiscountUah !== 0
            ? cartProduct.priceWithDiscountUah
            : cartProduct.priceUah;
    const pricePerProductEur =
        cartProduct.priceWithDiscountEur !== 0
            ? cartProduct.priceWithDiscountEur
            : cartProduct.priceEur;

    const pricePerProduct =
        currency === "uah" ? pricePerProductUah : pricePerProductEur;

    return pricePerProduct * cartProduct.quantity;
};
