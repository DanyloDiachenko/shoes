import { PageContent } from "@/components/pageComponents/products/PageContent";
import { PageHeader } from "@/components/pageComponents/products/PageHeader";
import { AuthorizationPopup } from "@/components/popups/Authorization";
import { Breadcrumbs } from "@/components/UI/Breadcrumbs";

const Products = () => {
    return (
        <>
            <PageHeader />
            <Breadcrumbs />
            <PageContent />
            {/* Popups */}
            <AuthorizationPopup />
        </>
    );
};

export default Products;
