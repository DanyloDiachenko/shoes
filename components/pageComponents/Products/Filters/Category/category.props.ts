import { IProductCategory } from "@/interfaces/product.interface";

export interface CategoryProps {
    allCategories: IProductCategory[];
    onCategoryClick: (category: IProductCategory) => void;
    selectedCategories: IProductCategory[];
}
