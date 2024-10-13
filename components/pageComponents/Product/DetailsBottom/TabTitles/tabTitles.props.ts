import { ProductDetailsTabContent } from "@/interfaces/productDetailsTabContent.interface";
import { ProductDetailsTab } from "@/types/productDetailsTab.type";

export interface TabTitlesProps {
    activeTab: ProductDetailsTab;
    setActiveTab: (tab: ProductDetailsTab) => void;
    tabs: ProductDetailsTabContent[];
}
