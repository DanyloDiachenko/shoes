import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { PageHeader } from "@/components/common/PageHeader";
import { CartPageContent } from "@/components/pageComponents/Cart";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { IProduct } from "@/interfaces/product.interface";
import { IProductCookie } from "@/interfaces/productCookie.interface";
import { getProduct } from "../api/products";
import { getServerCookie } from "@/helpers/getServerCookie";
import { CurrencyType } from "@/types/currency.type";
import { getCurrency } from "@/helpers/getCurrency";

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

const Cart = async () => {
    const cookieProducts: IProductCookie[] = getCookieProductsServer();
    const currency = getCurrency();

    let cartProducts: IProduct[] = [];

    for (let i = 0; i < cookieProducts.length; i++) {
        const productToCart = await getProduct(cookieProducts[i].id);

        cartProducts = [...cartProducts, productToCart];
    }

    return (
        <>
            <PageHeader title="Shopping Cart" subtitle="Shop" />
            <Breadcrumbs links={breadcrumbItems} />
            <CartPageContent
                cartProducts={cartProducts}
                cookieProducts={cookieProducts}
                currency={currency}
            />
        </>
    );
};

export default Cart;
