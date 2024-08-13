import "../../public/css/bootstrap.min.css";
import "../../public/css/style.css";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AuthorizationPopup } from "@/components/popups/Authorization";
import Script from "next/script";
import { CheckoutPageContent } from "@/components/pageComponents/checkout/PageContent";

const Checkout = () => {
    return (
        <>
            <PageHeader />
            <Breadcrumbs />
            <CheckoutPageContent />
            {/*  */}
            <AuthorizationPopup />
            {/*  */}
            <Script src="/js/jquery.min.js" />
            <Script src="/js/bootstrap.bundle.min.js" />
            <Script src="/js/jquery.hoverIntent.min.js" />
            <Script src="/js/jquery.waypoints.min.js" />
            <Script src="/js/superfish.min.js" />
            <Script src="/js/owl.carousel.min.js" />
            <Script src="/js/main.js" />
        </>
    );
};

export default Checkout;