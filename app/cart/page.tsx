import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { CartPageContent } from "@/components/pageComponents/Cart";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { Product } from "@/interfaces/product.interface";
import { ProductCookie } from "@/interfaces/productCookie.interface";
import { getProduct } from "../api/products";
import { getCurrency } from "@/helpers/getCurrency";
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
        title: "Shopping Cart",
        link: "#",
    },
];

const Cart = async () => {
    const cookieProducts: ProductCookie[] = getCookieProductsServer() || [];
    const currency = getCurrency();

    let cartProducts: Product[] = [];

    for (let i = 0; i < cookieProducts.length; i++) {
        const productToCart = await getProduct(cookieProducts[i].id);

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
            />
        </>
    );
};

export default Cart;
