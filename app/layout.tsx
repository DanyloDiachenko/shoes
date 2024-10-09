import { Header } from "@/components/common/Header";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { Noto_Sans } from "next/font/google";
import { StoreProvider } from "@/store/StoreProvider";
import { Footer } from "@/components/common/Footer";
import { getServerCookie } from "@/helpers/getServerCookie";
import { Product } from "@/interfaces/product.interface";
import { Currency } from "@/types/currency.type";
import { getProduct } from "./api/products";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";
import { ReactNode } from "react";
import { LayoutProps } from "./layout.props";

const notoSans = Noto_Sans({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["cyrillic", "latin"],
    display: "swap",
});

const RootLayout = async ({ children }: LayoutProps) => {
    const currency = getServerCookie("currency") as Currency;

    let cartProducts: Product[] = [];

    const cookieProducts = getCookieProductsServer() || [];

    if (cookieProducts?.length) {
        for (let i = 0; i < cookieProducts.length; i++) {
            const productToCart = await getProduct(cookieProducts[i].id);

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
