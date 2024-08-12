import "../../public/css/bootstrap.min.css";
import "../../public/css/plugins/owl-carousel/owl.carousel.css";
import "../../public/css/plugins/magnific-popup/magnific-popup.css";
import "../../public/css/style.css";
import "../../public/css/plugins/nouislider/nouislider.css";
/*  */
import { ProductsPageContent } from "@/components/pageComponents/products/PageContent";
import { PageHeader } from "@/components/common/PageHeader";
import { AuthorizationPopup } from "@/components/popups/Authorization";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import Script from "next/script";

const Products = () => {
    return (
        <>
            <PageHeader />
            <Breadcrumbs />
            <ProductsPageContent />
            {/* Popups */}
            <AuthorizationPopup />
            {/* Scripts */}
            <Script src="/js/jquery.min.js" />
            <Script src="/js/bootstrap.bundle.min.js" />
            <Script src="/js/jquery.hoverIntent.min.js" />
            <Script src="/js/jquery.waypoints.min.js" />
            <Script src="/js/owl.carousel.min.js" />
            <Script src="/js/wNumb.js" />
            <Script src="/js/bootstrap-input-spinner.js" />
            <Script src="/js/jquery.magnific-popup.min.js" />
            <Script src="/js/nouislider.min.js" />
            <Script src="/js/main.js" />
        </>
    );
};

export default Products;
