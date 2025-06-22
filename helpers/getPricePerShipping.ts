import { shippings } from "@/data/shippings";
import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";

export const getPricePerShipping = (
    currency: Currency,
    shippingType: ShippingType
) => {
    const shipping = shippings.find(
        (shipping) => shipping.value === shippingType
    );
    if (!shipping) {
        return 0;
    }

    return currency === "eur" ? shipping.priceEur : shipping.priceUah;
};
