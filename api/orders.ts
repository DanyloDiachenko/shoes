import { fetchApi } from "@/helpers/fetchApi";
import { CreateOrderBody } from "@/interfaces/requestBody/orders.interface";

export const createOrder = async (body: CreateOrderBody): Promise<any> => {
    return await fetchApi({
        endpoint: "/orders",
        method: "POST",
        body: JSON.stringify(body),
    });
};
