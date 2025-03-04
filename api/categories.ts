import { fetchApi } from "@/helpers/fetchApi";
import { ProductCategoryWithProductsQuantity } from "@/interfaces/entities/product.interface";

export const getCategories = async (): Promise<
    ProductCategoryWithProductsQuantity[]
> => {
    return await fetchApi({
        endpoint: "/categories",
        method: "GET",
    });
};
