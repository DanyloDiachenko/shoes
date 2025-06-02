interface Navigation {
    title: string;
    link: string;
    key: string;
}

export const navigation: Navigation[] = [
    {
        title: "Dashboard",
        link: "/dashboard",
        key: "dashboard",
    },
    {
        title: "Orders",
        link: "/dashboard/orders",
        key: "orders",
    },
    {
        title: "Addresses",
        link: "/dashboard/addresses",
        key: "addresses",
    },
    {
        title: "Account Details",
        link: "/dashboard/account",
        key: "account",
    },
];
