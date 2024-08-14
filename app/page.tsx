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
import { Subscribe } from "@/components/pageComponents/home/Subscribe";
import { AuthorizationPopup } from "@/components/popups/Authorization";

const Home = () => {
    return (
        <>
            <Slider />
            <BannerGroup />
            <Services />
            <NewArrivals />
            <Categories />
            <TopSellingProducts />
            <NewDeals />
            <BlogPosts />
            <Subscribe />
            {/* Scripts */}
            <Script src="/js/jquery.min.js" />
            <Script src="/js/main.js" />
            <Script src="/js/demos/demo-10.js" />
        </>
    );
};

export default Home;
