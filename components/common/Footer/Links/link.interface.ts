interface Sublink {
    title: string;
    link: string;
}

export interface Link {
    title: string;
    links: Sublink[];
}
