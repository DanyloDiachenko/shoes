import { ProductDetailsTabType } from "@/types/productDetailsTab.type";

export interface ProductDetailsTabContent {
    key: ProductDetailsTabType;
    title: string;
    content: React.ReactNode;
}
