import "../public/css/bootstrap.min.css";
import "../public/css/plugins/owl-carousel/owl.carousel.css";
import "../public/css/plugins/magnific-popup/magnific-popup.css";
import "../public/css/plugins/jquery.countdown.css";
import "../public/css/style.css";
import "../public/css/skins/skin-demo-10.css";
import "../public/css/demos/demo-10.css";

import { Header } from "@/components/common/Header";
import { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/common/Footer";
import { MobileMenu } from "@/components/common/MobileMenu";
import { Newsletter } from "@/components/popups/Newsletter";

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
            <body>
                <div className="page-wrapper">
                    <Header />
                    <main>{children}</main>
                    <Footer />
                </div>
                <MobileMenu />
                <button id="scroll-top" title="Back to Top">
                    <i className="icon-arrow-up"></i>
                </button>
                <div className="mobile-menu-overlay"></div>
                <Newsletter />

                {/*  */}
                <script src="assets/js/demos/demo-10.js"></script>
                <Script src="assets/js/jquery.min.js" />
                <Script src="assets/js/bootstrap.bundle.min.js" />
                <Script src="assets/js/jquery.hoverIntent.min.js" />
                <Script src="assets/js/jquery.waypoints.min.js" />
                <Script src="assets/js/superfish.min.js" />
                <Script src="assets/js/owl.carousel.min.js" />
                <Script src="assets/js/bootstrap-input-spinner.js" />
                <Script src="assets/js/jquery.plugin.min.js" />
                <Script src="ssets/js/jquery.magnific-popup.min.js" />
                <Script src="assets/js/jquery.countdown.min.js" />
                <Script src="assets/js/main.js" />
                <Script src="assets/js/demos/demo-10.js" />
            </body>
        </html>
    );
};

export default RootLayout;
