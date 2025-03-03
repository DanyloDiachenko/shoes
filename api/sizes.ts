import { fetchApi } from "@/helpers/fetchApi";
import { ProductSize } from "@/interfaces/product.interface";

export const getSizes = async (): Promise<ProductSize[]> => {
    return await fetchApi({
        endpoint: "/sizes",
        method: "GET",
    });
};

