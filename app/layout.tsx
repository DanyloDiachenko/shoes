import { Header } from "@/components/common/Header";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Noto_Sans } from "next/font/google";
import { StoreProvider } from "@/store/StoreProvider";
import { Footer } from "@/components/common/Footer";
import { LayoutProps } from "./layout.props";
import { MobileMenu } from "@/components/common/MobileMenu";
import { Popups } from "@/components/popups";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Molla - eCommerce Shoes Shop",
    description: "Molla - eCommerce Shoes Shop",
    keywords: ["Molla", "eCommerce", "Shoes", "Shop"],
    authors: {
        url: "https://github.com/DanyloDiachenko",
        name: "Danil Diachenko",
    },
    icons: {
        icon: [
            {
                url: "/images/icons/favicon-32x32.png",
                type: "image/png",
                sizes: "32x32",
            },
            {
                url: "/images/icons/favicon-16x16.png",
                type: "image/png",
                sizes: "16x16",
            },
        ],
        apple: "/images/icons/apple-touch-icon.png",
        shortcut: "/images/icons/favicon.ico",
    },
    // manifest: "",
    other: {
        "msapplication-TileColor": "#cc9966",
        "msapplication-config": "/seo/browserconfig.xml",
        "application-name": "Molla",
        "apple-mobile-web-app-title": "Molla",
    },
};

const notoSans = Noto_Sans({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["cyrillic", "latin"],
    display: "swap",
});

const RootLayout = async ({ children }: LayoutProps) => {
    return (
        <html lang="en">
            <body className={notoSans.className}>
                <StoreProvider>
                    <div className="page-wrapper">
                        <Header />
                        <main className="main">{children}</main>
                        <Footer />
                    </div>
                    {/* 
                    <button id="scroll-top" title="Back to Top">
                        <i className="icon-arrow-up"></i>
                    </button>
                 */}
                    <Popups />
                    <MobileMenu />
                </StoreProvider>
            </body>
        </html>
    );
};

export default RootLayout;
