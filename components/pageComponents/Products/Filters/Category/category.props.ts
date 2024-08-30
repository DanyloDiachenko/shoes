import {
    IProductCategory,
    IProductCategoryWithProductsQuantity,
} from "@/interfaces/product.interface";

export interface CategoryProps {
    allCategories: IProductCategoryWithProductsQuantity[];
}
