import { getCookie } from "@/helpers/getCookie";
import {
    CreateAddressBody,
    UpdateAddressBody,
} from "@/interfaces/requestBody/addresses.interface";

export const createOrUpdateAddress = async (
    urlType:
        | "createBilling"
        | "createShipping"
        | "changeBilling"
        | "changeShipping",
    body: CreateAddressBody | UpdateAddressBody
) => {
    const token = await getCookie("token");

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/addresses/${
            urlType === "createBilling" || urlType === "changeBilling"
                ? "billing"
                : "shipping"
        }`,
        {
            method:
                urlType === "createBilling" || urlType === "createShipping"
                    ? "POST"
                    : "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(body),
        }
    );

    const resJson = await res.json();

    return resJson;
};
