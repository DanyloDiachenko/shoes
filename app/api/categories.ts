import { ProductCategoryWithProductsQuantity } from "@/interfaces/product.interface";

export const getCategories = async (): Promise<
    ProductCategoryWithProductsQuantity[]
> => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        {}
    );

    if (!res.ok) {
        console.log("Failed to fetch data", res);

        return [];
    }

    const data = await res.json();

    return data;
};
