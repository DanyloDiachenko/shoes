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
                    <div className="page-wrapper">
                        <main>{children}</main>
                    </div>
                </div>
                
                {/*  */}
                <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
                <Script
                    src="/js/jquery.hoverIntent.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/js/jquery.waypoints.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/js/superfish.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/js/owl.carousel.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/js/bootstrap-input-spinner.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/js/jquery.plugin.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/js/jquery.magnific-popup.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    src="/js/jquery.countdown.min.js"
                    strategy="beforeInteractive"
                />
                <Script src="/js/demos/demo-10.js" strategy="lazyOnload" />
                <Script
                    src="/js/bootstrap.bundle.min.js"
                    strategy="lazyOnload"
                />
                <Script src="/js/wNumb.js" strategy="lazyOnload" />
                <Script src="/js/nouislider.min.js" strategy="lazyOnload" />
                <Script src="/js/main.js" strategy="lazyOnload" />
            </body>
        </html>
    );
};

export default RootLayout;
