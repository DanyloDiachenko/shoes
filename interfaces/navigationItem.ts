export interface NavigationItemSublink {
    title: string;
    link: string;
}

export interface NavigationItem {
    title: string;
    link: string;
    sublinks: NavigationItemSublink[];
}