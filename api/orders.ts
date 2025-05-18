import { fetchApi } from "@/helpers/fetchApi";
import { Order } from "@/interfaces/entities/order.interface";
import { ShippingType } from "@/types/shipping.type";

export interface CreateOrderBody {
    amount: number;
    cart: { productId: string; quantity: number; size: number }[];
    orderNotes?: string;
    shippingType: ShippingType;
}

export interface CreateOrderResponse {
    cart: { productId: string; quantity: number; size: number }[];
    shippingType: string;
    orderNotes?: string;
    id: string;
    createdAt: Date;
}

export const createOrder = async (
    body: CreateOrderBody
): Promise<CreateOrderResponse> => {
    return await fetchApi({
        endpoint: "/orders",
        method: "POST",
        body: body,
        isAuthRequired: true,
    });
};

export const getOrders = async (): Promise<Order[]> => {
    return await fetchApi({
        endpoint: "/orders",
        method: "GET",
        isAuthRequired: true,
    });
};
