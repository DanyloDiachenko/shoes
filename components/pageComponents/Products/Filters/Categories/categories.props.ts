import {
    ProductCategory,
    ProductCategoryWithProductsQuantity,
} from "@/interfaces/product.interface";

export interface CategoriesProps {
    allCategories: ProductCategoryWithProductsQuantity[];
}
