import { fetchApi } from "@/helpers/fetchApi";
import { ProductBrand } from "@/interfaces/product.interface";

export const getBrands = async (): Promise<ProductBrand[]> => {
    return await fetchApi({
        endpoint: "/brands",
        method: "GET",
    });
};
