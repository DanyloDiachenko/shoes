import { IProductDetailsTabContent } from "@/interfaces/productDetailsTabContent.interface";
import { ProductDetailsTabType } from "@/types/productDetailsTab.type";

export interface TabTitlesProps {
    activeTab: ProductDetailsTabType;
    setActiveTab: (tab: ProductDetailsTabType) => void;
    tabs: IProductDetailsTabContent[];
}
