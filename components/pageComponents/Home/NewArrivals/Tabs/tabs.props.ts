import { TabSlug } from "../tabSlug.type";

export interface TabsProps {
    activeTabSlug: TabSlug;
    onSetActiveTabClick: (slug: TabSlug) => void;
}