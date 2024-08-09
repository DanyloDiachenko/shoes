import { BannerGroup } from "@/components/pageComponents/home/BannerGroup";
import { Services } from "@/components/pageComponents/home/Services";
import { Slider } from "@/components/pageComponents/home/Slider";

const Home = () => {
    return (
        <>
            <Slider />
            <BannerGroup />
            <Services />
        </>
    );
};

export default Home;
