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
import Script from "next/script";

const Products = () => {
    return (
        <>
            <PageHeader />
            <Breadcrumbs />
            <PageContent />
            {/* Popups */}
            <AuthorizationPopup />
            {/* Scripts */}
            <Script src="../../public/js/jquery.min.js" />
            <Script src="../../public/js/bootstrap.bundle.min.js" />
            <Script src="../../public/js/jquery.hoverIntent.min.js" />
            <Script src="../../public/js/jquery.waypoints.min.js" />
            <Script src="../../public/js/owl.carousel.min.js" />
            <Script src="../../public/js/wNumb.js" />
            <Script src="../../public/js/bootstrap-input-spinner.js" />
            <Script src="../../public/js/jquery.magnific-popup.min.js" />
            <Script src="../../public/js/nouislider.min.js" />
            <Script src="../../public/js/main.js" />
        </>
    );
};

export default Products;
