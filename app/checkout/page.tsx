import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { CheckoutPageComponent } from "@/components/pageComponents/Checkout";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";

const breadcrumbs: Breadcrumb[] = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Shop",
        link: "/products",
    },
    {
        title: "Checkout",
        link: "#",
    },
];

const Checkout = () => {
    return (
        <>
            <PageHeader title="Checkout" subtitle="Shop" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CheckoutPageComponent />
        </>
    );
};

export default Checkout;
