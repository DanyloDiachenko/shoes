import "../../../public/css/bootstrap.min.css";
import "../../../public/css/plugins/owl-carousel/owl.carousel.css";
import "../../../public/css/plugins/magnific-popup/magnific-popup.css";
import "../../../public/css/style.css";
import "../../../public/css/plugins/nouislider/nouislider.css";
import { AuthorizationPopup } from "@/components/popups/Authorization";
import Script from "next/script";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { ProductPageContent } from "@/components/pageComponents/product/PageContent";
import { StickyBar } from "@/components/pageComponents/product/StickyBar";

const Product = () => {
    return (
        <>
            <Breadcrumbs />
            <ProductPageContent />
            {/* Additional */}
            <StickyBar />
            {/* Popups */}
            <Script src="/js/jquery.min.js" />
            <Script src="/js/bootstrap.bundle.min.js" />
            <Script src="/js/jquery.hoverIntent.min.js" />
            <Script src="/js/jquery.waypoints.min.js" />
            <Script src="/js/superfish.min.js" />
            <Script src="/js/owl.carousel.min.js" />
            <Script src="/js/jquery.elevateZoom.min.js" />
            <Script src="/js/bootstrap-input-spinner.js" />
            <Script src="/js/jquery.magnific-popup.min.js" />
            <Script src="/js/main.js" />
        </>
    );
};

export default Product;
