import { IProductCategoryWithProductsQuantity } from "@/interfaces/product.interface";

export const getCategories = async (): Promise<
    IProductCategoryWithProductsQuantity[]
> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};
