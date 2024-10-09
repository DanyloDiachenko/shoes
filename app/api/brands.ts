import { ProductBrand } from "@/interfaces/product.interface";

export const getBrands = async (): Promise<ProductBrand[]> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brands`, {
        cache: "no-cache",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    const data = await res.json();

    return data;
};
