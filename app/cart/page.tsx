import "../../public/css/bootstrap.min.css";
import "../../public/css/style.css";
import { PageHeader } from "@/components/common/PageHeader";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { AuthorizationPopup } from "@/components/popups/Authorization";
import Script from "next/script";
import { CartPageContent } from "@/components/pageComponents/cart/PageContent";

const Cart = () => {
    return (
        <>
            <PageHeader />
            <Breadcrumbs />
            <CartPageContent />
            {/*  */}
            <AuthorizationPopup />
            {/*  */}
            <Script src="/js/jquery.min.js" />
            <Script src="/js/bootstrap.bundle.min.js" />
            <Script src="/js/jquery.hoverIntent.min.js" />
            <Script src="/js/jquery.waypoints.min.js" />
            <Script src="/js/superfish.min.js" />
            <Script src="/js/owl.carousel.min.js" />
            <Script src="/js/bootstrap-input-spinner.js" />
            <Script src="/js/main.js" />
        </>
    );
};

export default Cart;
