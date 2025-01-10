import { TabSlug } from "../NewArrivals/tabSlug.type";

export interface TabsProps {
    activeTabSlug: TabSlug;
    onSetActiveTabClick: (slug: TabSlug) => void;
}