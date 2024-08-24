import { ProductDetailsTabType } from "@/types/productDetailsTab.type";

export interface IProductDetailsTabContent {
    key: ProductDetailsTabType;
    title: string;
    content: React.ReactNode;
}
