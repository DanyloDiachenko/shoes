import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import "../../public/css/bootstrap.min.css";
import "../../public/css/style.css";
import Script from "next/script";
import { PageHeader } from "@/components/common/PageHeader";
import { ContactPageContent } from "@/components/pageComponents/contact/PageContent";
import { AuthorizationPopup } from "@/components/popups/Authorization";

const Contact = () => {
    return (
        <>
            <Breadcrumbs />
            <PageHeader />
            <ContactPageContent />
            {/* Scripts */}
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

export default Contact;
