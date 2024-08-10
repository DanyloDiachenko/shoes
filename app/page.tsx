import { BannerGroup } from "@/components/pageComponents/home/BannerGroup";
import { BlogPosts } from "@/components/pageComponents/home/BlogPosts";
import { Categories } from "@/components/pageComponents/home/Categories";
import { NewArrivals } from "@/components/pageComponents/home/NewArrivals";
import { NewDeals } from "@/components/pageComponents/home/NewDeals";
import { Services } from "@/components/pageComponents/home/Services";
import { Slider } from "@/components/pageComponents/home/Slider";
import { TopSellingProducts } from "@/components/pageComponents/home/TopSellingProducts";
import { Newsletter } from "@/components/popups/Newsletter";

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
            {/*  */}
            <Newsletter />
        </>
    );
};

export default Home;
