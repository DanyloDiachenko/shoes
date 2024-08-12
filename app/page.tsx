import "../public/css/bootstrap.min.css";
import "../public/css/plugins/owl-carousel/owl.carousel.css";
import "../public/css/plugins/magnific-popup/magnific-popup.css";
import "../public/css/plugins/jquery.countdown.css";
import "../public/css/style.css";
import "../public/css/skins/skin-demo-10.css";
import "../public/css/demos/demo-10.css";
/*  */
import { BannerGroup } from "@/components/pageComponents/home/BannerGroup";
import { BlogPosts } from "@/components/pageComponents/home/BlogPosts";
import { Categories } from "@/components/pageComponents/home/Categories";
import { NewArrivals } from "@/components/pageComponents/home/NewArrivals";
import { NewDeals } from "@/components/pageComponents/home/NewDeals";
import { Services } from "@/components/pageComponents/home/Services";
import { Slider } from "@/components/pageComponents/home/Slider";
import { TopSellingProducts } from "@/components/pageComponents/home/TopSellingProducts";
import { NewsletterPopup } from "@/components/popups/Newsletter";
import Script from "next/script";

const Home = () => {
    return (
        <>
            <Slider />
            <BannerGroup />
            <Services />
            <NewArrivals />
            <Categories />
            <div className="mb-4"></div>
            <TopSellingProducts />
            <div className="mb-5"></div>
            <NewDeals />
            <BlogPosts />
            {/* Popups */}
            <NewsletterPopup />
            {/* Scripts */}
            <Script src="/js/jquery.min.js" />
            <Script src="/js/bootstrap.bundle.min.js" />
            <Script src="/js/jquery.hoverIntent.min.js" />
            <Script src="/js/jquery.waypoints.min.js" />
            <Script src="/js/superfish.min.js" />
            <Script src="/js/owl.carousel.min.js" />
            <Script src="/js/bootstrap-input-spinner.js" />
            <Script src="/js/jquery.plugin.min.js" />
            <Script src="/js/jquery.magnific-popup.min.js" />
            <Script src="/js/jquery.countdown.min.js" />
            <Script src="/js/main.js" />
        </>
    );
};

export default Home;
