import { fetchApi } from "@/helpers/fetchApi";
import { ShippingType } from "@/types/shipping.type";

export interface CreateOrderBody {
    cart: { productId: string; quantity: number }[];
    deliveryAddressId: string;
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
