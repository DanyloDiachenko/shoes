import { fetchApi } from "@/helpers/fetchApi";
import { Size } from "@/interfaces/entities/size.interface";

export const getSizes = async (): Promise<Size[]> => {
    return await fetchApi({
        endpoint: "/sizes",
        method: "GET",
    });
};
