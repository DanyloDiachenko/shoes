import { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/common/Footer";
import { MobileMenu } from "@/components/common/MobileMenu";
import { Header } from "@/components/common/Header";

const poppinsFont = Poppins({
    weight: ["300", "400", "500", "600", "700", "800"],
    style: ["normal", "italic"],
    subsets: ["latin", "latin-ext"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Molla - Bootstrap eCommerce Template",
    description: "Molla - Bootstrap eCommerce Template",
    viewport: {
        width: "device-width",
        initialScale: 1,
    },
    icons: {
        icon: [
            {
                rel: "apple-touch-icon",
                sizes: "180x180",
                url: "/images/icons/apple-touch-icon.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                url: "/images/icons/favicon-32x32.png",
            },
            {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                url: "/images/icons/favicon-16x16.png",
            },
            { rel: "shortcut icon", url: "/images/icons/favicon.ico" },
        ],
    },
    manifest: "/images/icons/site.html",
    themeColor: "#ffffff",
    applicationName: "Molla",
    keywords: ["HTML5 Template"],
    authors: [{ name: "p-themes" }],
    other: {
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge",
    },
};

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <html lang="en">
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
            </body>
        </html>
    );
};

export default RootLayout;
