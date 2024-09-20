import { Header } from "@/components/common/Header";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { Noto_Sans } from "next/font/google";
import { StoreProvider } from "@/store/StoreProvider";
import { Footer } from "@/components/common/Footer";
import { getServerCookie } from "@/helpers/getServerCookie";
import { IProductCookie } from "@/interfaces/productCookie.interface";
import { IProduct } from "@/interfaces/product.interface";
import { CurrencyType } from "@/types/currency.type";
import { getProduct } from "./api/products";

const notoSans = Noto_Sans({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["cyrillic", "latin"],
    display: "swap",
});

const RootLayout = async ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const currency = getServerCookie("currency") as CurrencyType;
    const cartCookie: string | null = getServerCookie("cart");

    let cartProducts: IProduct[] = [];

    const cookieProducts: IProductCookie[] = cartCookie?.length
        ? JSON.parse(cartCookie)
        : [];

    const getProduct = async (productId: string) => {
        return await getProduct(productId);
    };

    if (cartCookie?.length) {
        for (let i = 0; i < cartProducts.length; i++) {
            const productToCart = await getProduct(cartProducts[i].id);

            cartProducts = [...cartProducts, productToCart];
        }
    }

    return (
        <html lang="en">
            <body className={notoSans.className}>
                <StoreProvider>
                    <div className="page-wrapper">
                        <Header
                            currency={currency}
                            cartProducts={cartProducts}
                            cookieProducts={cookieProducts}
                        />
                        <main className="main">{children}</main>
                        <Footer />
                    </div>
                    {/* <MobileMenu />
                    <button id="scroll-top" title="Back to Top">
                        <i className="icon-arrow-up"></i>
                    </button>
                    <div className="mobile-menu-overlay"></div>
                    <Popups /> */}
                </StoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
