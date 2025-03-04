import { fetchApi } from "@/helpers/fetchApi";
import { Address } from "@/interfaces/entities/address.interface";

interface CreateAddressBody {
    street: string;
    city: string;
    country: string;
    postIndex: string;
    homeNumber: string;
}

interface UpdateAddressBody extends Partial<CreateAddressBody> {}

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
