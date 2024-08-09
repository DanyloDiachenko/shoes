import { BannerGroup } from "@/components/pageComponents/home/BannerGroup";
import { NewArrivals } from "@/components/pageComponents/home/NewArrivals";
import { Services } from "@/components/pageComponents/home/Services";
import { Slider } from "@/components/pageComponents/home/Slider";

const Home = () => {
    return (
        <>
            <Slider />
            <BannerGroup />
            <Services />
            <NewArrivals />
        </>
    );
};

export default Home;
