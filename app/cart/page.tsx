import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { CartPageContent } from "@/components/pageComponents/Cart";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { Product } from "@/interfaces/product.interface";
import { CookieProduct } from "@/interfaces/cookieProduct.interface";
import { getProduct } from "../api/products";
import { getCurrency } from "@/helpers/getCurrency";
import { Breadcrumb } from "@/interfaces/breadcrumb.interface";
import { getCookie } from "@/helpers/getCookie";
import { getProfile } from "../api/auth/user";
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
        title: "Shopping Cart",
        link: "#",
    },
];

const Cart = async () => {
    const token = await getCookie("token");
    const user = token ? ((await getProfile(token)) as User) : null;

    const cookieProducts: CookieProduct[] =
        (await getCookieProductsServer()) || [];
    const currency = await getCurrency();

    let cartProducts: Product[] = [];

    for (let i = 0; i < cookieProducts.length; i++) {
        const productToCart = await getProduct(cookieProducts[i].id);
        if (!productToCart) {
            return;
        }
        
        cartProducts = [...cartProducts, productToCart];
    }

    return (
        <>
            <PageHeader title="Shopping Cart" subtitle="Shop" />
            <Breadcrumbs breadcrumbs={breadcrumbs} />
            <CartPageContent
                cartProducts={cartProducts}
                cookieProducts={cookieProducts}
                currency={currency}
                user={user}
            />
        </>
    );
};

export default Cart;
