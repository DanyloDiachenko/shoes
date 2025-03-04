import { fetchApi } from "@/helpers/fetchApi";
import { Brand } from "@/interfaces/entities/brand.interface";

export const getBrands = async (): Promise<Brand[]> => {
    return await fetchApi({
        endpoint: "/brands",
        method: "GET",
    });
};
