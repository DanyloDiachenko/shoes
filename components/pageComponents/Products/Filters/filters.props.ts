import { IProductCategoryWithProductsQuantity, IProductSize } from "@/interfaces/product.interface";

export interface FiltersProps {
    categoriesResponse: IProductCategoryWithProductsQuantity[];
    sizesResponse: IProductSize[];
}
