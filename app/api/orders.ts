import { getCookie } from "@/helpers/getCookie";
import { CreateOrderBody } from "@/interfaces/requestBody/orders.interface";

// add logic for creating order & change any type
export const createOrder = async (body: CreateOrderBody): Promise<any> => {
    const token = await getCookie("token");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
    });

    const resJson = await res.json();

    return resJson;
};
