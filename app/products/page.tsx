import "../../public/css/bootstrap.min.css";
import "../../public/css/plugins/owl-carousel/owl.carousel.css";
import "../../public/css/plugins/magnific-popup/magnific-popup.css";
import "../../public/css/style.css";
import "../../public/css/plugins/nouislider/nouislider.css";
/*  */
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
