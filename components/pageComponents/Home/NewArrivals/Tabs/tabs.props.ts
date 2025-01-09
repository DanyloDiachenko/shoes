import { TabSlug } from "../tabSlug.type";

export interface TabsProps {
    activeTabSlug: string;
    onSetActiveTabClick: (slug: TabSlug) => void;
}