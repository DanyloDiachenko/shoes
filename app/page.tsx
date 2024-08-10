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
        </>
    );
};

export default Home;
