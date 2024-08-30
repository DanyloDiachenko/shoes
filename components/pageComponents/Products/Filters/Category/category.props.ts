import {
    IProductCategory,
    IProductCategoryWithProductsQuantity,
} from "@/interfaces/product.interface";

export interface CategoryProps {
    allCategories: IProductCategoryWithProductsQuantity[];
    onCategoryClick: (category: IProductCategory) => void;
    selectedCategories: IProductCategory[];
}
