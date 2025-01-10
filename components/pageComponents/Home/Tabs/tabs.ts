import { TabSlug } from "../tabSlug.type";

interface Tab {
    title: string;
    slug: TabSlug;
}

export const tabs: Tab[] = [
    {
        title: "All",
        slug: "all",
    },
    {
        title: "Women's",
        slug: "women",
    },
    {
        title: "Men's",
        slug: "men",
    },
];
