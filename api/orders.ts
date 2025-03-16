import { fetchApi } from "@/helpers/fetchApi";
import { Currency } from "@/types/currency.type";
import { ShippingType } from "@/types/shipping.type";

export interface CreateOrderBody {
    amount: number;
    currency: Currency;
    cart: { productId: string; quantity: number; size: string }[];
    orderNotes?: string;
    shippingType: ShippingType;
}

export const createOrder = async (body: CreateOrderBody): Promise<any> => {
    return await fetchApi({
        endpoint: "/orders",
        method: "POST",
        body: JSON.stringify(body),
    });
};
