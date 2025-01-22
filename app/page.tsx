import { HomePageComponent } from "@/components/pageComponents/Home";
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
    themeColor: "#cc9966",
    other: {
        "msapplication-TileColor": "#cc9966",
        "msapplication-config": "/seo/browserconfig.xml",
        "application-name": "Molla",
        "apple-mobile-web-app-title": "Molla",
    },
};

const Home = async () => {
    return <HomePageComponent />;
};

export default Home;
