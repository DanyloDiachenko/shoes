import { fetchApi } from "@/helpers/fetchApi";
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
    return await fetchApi({
        endpoint: `/addresses/${
            urlType === "createBilling" || urlType === "updateBilling"
                ? "billing"
                : "shipping"
        }`,
        method:
            urlType === "createBilling" || urlType === "createShipping"
                ? "POST"
                : "PUT",
        isAuthRequired: true,
        body,
    });
};
