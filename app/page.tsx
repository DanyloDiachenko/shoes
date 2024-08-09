import { BannerGroup } from "@/components/pageComponents/home/BannerGroup";
import { Categories } from "@/components/pageComponents/home/Categories";
import { NewArrivals } from "@/components/pageComponents/home/NewArrivals";
import { Services } from "@/components/pageComponents/home/Services";
import { Slider } from "@/components/pageComponents/home/Slider";
import { TopSellingProducts } from "@/components/pageComponents/home/TopSellingProducts";

const Home = () => {
    return (
        <>
            <Slider />
            <BannerGroup />
            <Services />
            <NewArrivals />
            <Categories />
            <TopSellingProducts />
        </>
    );
};

export default Home;
