import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { CheckoutPageComponent } from "@/components/page-components/Checkout";
import { getCookie } from "@/helpers/getCookie";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { redirect } from "next/navigation";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { getProduct } from "../../api/products";
import { getCurrency } from "@/helpers/getCurrency";
import { ShippingType } from "@/types/shipping.type";
import { setCookie } from "@/helpers/setCookie";
import { getProfile } from "@/api/auth";
import { Product } from "@/interfaces/entities/product.interface";
import { User } from "@/interfaces/entities/user.inteface";

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

    const profileResponse = await getProfile();

    if ("statusCode" in profileResponse && profileResponse.statusCode === 401) {
        setCookie("token", "");
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
        if (!productToCart) {
            return;
        }

        if ("id" in productToCart) {
            products = [...products, productToCart];
        }
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
