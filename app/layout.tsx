import { Header } from "@/components/common/Header";
import "./globals.scss";
import "react-toastify/dist/ReactToastify.css";
import { Noto_Sans } from "next/font/google";
import { StoreProvider } from "@/store/StoreProvider";
import { Footer } from "@/components/common/Footer";
import { LayoutProps } from "./layout.props";
import { MobileMenu } from "@/components/common/MobileMenu";
import { SessionProvider } from "@/components/additional/SessionProvider";

const notoSans = Noto_Sans({
    weight: ["200", "300", "400", "500", "600", "700", "800"],
    subsets: ["cyrillic", "latin"],
    display: "swap",
});

const RootLayout = async ({ children }: LayoutProps) => {
    return (
        <html lang="en">
            <body className={notoSans.className}>
                <SessionProvider>
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
                    
                    <Popups /> */}
                        <MobileMenu />
                    </StoreProvider>
                </SessionProvider>
            </body>
        </html>
    );
};

export default RootLayout;
