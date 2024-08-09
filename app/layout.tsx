import { Header } from "@/components/common/Header";

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
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
