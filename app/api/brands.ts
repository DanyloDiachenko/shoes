import { ProductBrand } from "@/interfaces/product.interface";

export const getBrands = async (): Promise<ProductBrand[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`, {});

    if (!res.ok) {
        console.log("Failed to fetch data", res);

        return [];
    }

    const data = await res.json();

    return data;
};
