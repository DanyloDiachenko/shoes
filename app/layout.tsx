import { Header } from "@/components/common/Header";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { Noto_Sans } from "next/font/google";
import { StoreProvider } from "@/store/StoreProvider";
import { Footer } from "@/components/common/Footer";

const notoSans = Noto_Sans({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["cyrillic", "latin"],
    display: "swap",
});

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <body className={notoSans.className}>
                <StoreProvider>
                    <div className="page-wrapper">
                        <Header />
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
