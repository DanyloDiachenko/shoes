import { ProductDetailsTab } from "@/types/productDetailsTab.type";
import { ReactNode } from "react";

export interface ProductDetailsTabContent {
    key: ProductDetailsTab;
    title: string;
    content: ReactNode;
}
