import { ProductColor } from "@/interfaces/product.interface";
import { fetchApi } from "@/helpers/fetchApi";

export const getColors = async (): Promise<ProductColor[]> => {
    return await fetchApi({
        endpoint: "/colors",
        method: "GET",
    });
};
