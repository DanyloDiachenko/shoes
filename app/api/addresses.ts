import { getCookie } from "@/helpers/getCookie";
import { Address } from "@/interfaces/address.interface";
import {
    CreateAddressBody,
    UpdateAddressBody,
} from "@/interfaces/requestBody/addresses.interface";

export const createOrUpdateAddress = async (
    urlType:
        | "createBilling"
        | "createShipping"
        | "updateBilling"
        | "updateShipping",
    body: CreateAddressBody | UpdateAddressBody
): Promise<Address> => {
    const token = await getCookie("token");

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/addresses/${
            urlType === "createBilling" || urlType === "updateBilling"
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
