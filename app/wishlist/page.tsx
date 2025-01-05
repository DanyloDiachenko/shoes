import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";

const breadcrumbs: Breadcrumb[] = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Shop",
        link: "/shop",
    },
    {
        title: "Wishlist",
        link: "/wishlist",
    },
];

const Wishlist = () => {
    return (
        <>
            <PageHeader title="Wishlist" subtitle="Shop" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
        </>
    );
};

export default Wishlist;
