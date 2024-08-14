import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/common/Footer";
import { MobileMenu } from "@/components/common/MobileMenu";
import { Header } from "@/components/common/Header";
import { StoreProvider } from "@/store/StoreProvider";
import { Popups } from "@/components/popups/Popups";

const poppinsFont = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["normal", "italic"],
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
            <StoreProvider>
                <body className={poppinsFont.className}>
                    <div className="page-wrapper">
                        <Header />
                        <main className="main">{children}</main>
                        <Footer />
                    </div>
                    <MobileMenu />
                    <button id="scroll-top" title="Back to Top">
                        <i className="icon-arrow-up"></i>
                    </button>
                    <div className="mobile-menu-overlay"></div>
                    <Popups />
                </body>
            </StoreProvider>
        </html>
    );
};

export default RootLayout;
