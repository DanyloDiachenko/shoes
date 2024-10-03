import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { CartPageContent } from "@/components/pageComponents/Cart";

const breadcrumbItems = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Shop",
        link: "/products",
    },
    {
        title: "Shopping Cart",
        link: "#",
    },
];

const Cart = () => {
    return (
        <>
            <PageHeader title="Shopping Cart" subtitle="Shop" />
            <Breadcrumbs links={breadcrumbItems} />
            <CartPageContent />
        </>
    );
};

export default Cart;
