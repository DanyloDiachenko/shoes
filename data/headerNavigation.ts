interface HeaderNavigationSublink {
    title: string;
    link: string;
    isNew?: boolean;
}

interface HeaderNavigationItem {
    title: string;
    link: string;
    sublinks: HeaderNavigationSublink[];
}

export const headerNavigation: HeaderNavigationItem[] = [
    {
        title: "Bestsellers",
        link: "/products",
        sublinks: [
            {
                title: "Nike Air 110",
                link: "/products/test",
                isNew: true,
            },
            {
                title: "Nike Air 110",
                link: "/products/test",
            },
            {
                title: "Nike Air 110",
                link: "/products/test",
            },
            {
                title: "Nike Air 110",
                link: "/products/test",
                isNew: true,
            },
            {
                title: "Nike Air 110",
                link: "/products/test",
            },
            {
                title: "Nike Air 110",
                link: "/products/test",
            },
            {
                title: "Nike Air 110",
                link: "/products/test",
                isNew: true,
            },
            {
                title: "Nike Air 110",
                link: "/products/test",
            },
        ],
    },
    {
        title: "Category",
        link: "/products",
        sublinks: [
            {
                title: "For Men",
                link: "/products?category=men",
            },
            {
                title: "For Woman",
                link: "/products?category=woman",
            },
            {
                title: "For Kids",
                link: "/products?category=kids",
            },
            {
                title: "Unisex",
                link: "/products?category=unisex",
            },
        ],
    },
    {
        title: "Producer",
        link: "/products",
        sublinks: [
            {
                title: "Nike",
                link: "/products?producer=nike",
            },
            {
                title: "Adidas",
                link: "/products?producer=adidas",
            },
            {
                title: "Puma",
                link: "/products?producer=puma",
            },
            {
                title: "New Balance",
                link: "/products?producer=new-balance",
            },
        ],
    },
    {
        title: "Size",
        link: "/products",
        sublinks: [
            {
                title: "XS",
                link: "/products?size=xs",
            },
            {
                title: "S",
                link: "/products?size=s",
            },
            {
                title: "M",
                link: "/products?size=m",
            },
            {
                title: "L",
                link: "/products?size=l",
            },
            {
                title: "XL",
                link: "/products?size=xl",
            },
            {
                title: "XXL",
                link: "/products?size=xxl",
            },
        ],
    },
    {
        title: "Colour",
        link: "/products",
        sublinks: [
            {
                title: "Brown",
                link: "/products?color=brown",
            },
            {
                title: "Yellow",
                link: "/products?color=yellow",
            },
            {
                title: "Black",
                link: "/products?color=black",
            },
            {
                title: "Red",
                link: "/products?color=red",
            },
            {
                title: "Blue",
                link: "/products?color=blue",
            },
            {
                title: "Green",
                link: "/products?color=green",
            },
            {
                title: "Pink",
                link: "/products?color=pink",
            },
            {
                title: "White",
                link: "/products?color=white",
            },
        ],
    },
];
