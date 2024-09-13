import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/pageComponents/Product";

const links = [
    {
        title: "Home",
        link: "/",
    },
    {
        title: "Shop",
        link: "/products",
    },
    {
        title: "List",
        link: "/products",
    },
];

const ProductDetails = () => {
    return (
        <>
            <Breadcrumbs links={links} />
            <ProductPageContent />
        </>
    );
};

export default ProductDetails;
