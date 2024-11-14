import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { CheckoutPageComponent } from "@/components/pageComponents/Checkout";
import { getCookie } from "@/helpers/getCookie";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { redirect } from "next/navigation";
import { getProfile } from "../api/auth/user";
import { signOut } from "next-auth/react";
import { User } from "@/interfaces/user.inteface";

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

const Checkout = async () => {
    const token = await getCookie("token");

    if (!token) {
        redirect("/login");
    }

    const profileResponse = await getProfile(token);

    if ("statusCode" in profileResponse && profileResponse.statusCode === 401) {
        signOut();
        redirect("/login");
    }

    return (
        <>
            <PageHeader title="Checkout" subtitle="Shop" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CheckoutPageComponent user={profileResponse as User} />
        </>
    );
};

export default Checkout;
