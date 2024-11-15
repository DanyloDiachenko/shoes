import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { CheckoutPageComponent } from "@/components/pageComponents/Checkout";
import { getCookie } from "@/helpers/getCookie";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { redirect } from "next/navigation";
import { getProfile } from "../api/auth/user";
import { signOut } from "next-auth/react";
import { User } from "@/interfaces/user.inteface";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { getProduct } from "../api/products";
import { Product } from "@/interfaces/product.interface";
import { getCurrency } from "@/helpers/getCurrency";
import { ShippingType } from "@/types/shipping.type";

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

    const cookieProducts = (await getCookieProductsServer()) || [];
    if (!cookieProducts.length) {
        redirect("/products");
    }

    const currency = await getCurrency();
    let products: Product[] = [];
    const shippingType = (await getCookie("shippingType")) as ShippingType;

    for (let i = 0; i < cookieProducts.length; i++) {
        const productToCart = await getProduct(cookieProducts[i].id);

        products = [...products, productToCart];
    }

    return (
        <>
            <PageHeader title="Checkout" subtitle="Shop" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CheckoutPageComponent
                user={profileResponse as User}
                products={products}
                cookieProducts={cookieProducts}
                currency={currency}
                shippingType={shippingType}
            />
        </>
    );
};

export default Checkout;
