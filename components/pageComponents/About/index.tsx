import { Banner } from "./Banner";
import { Brands } from "./Brands";
import { OurDescription } from "./OurDescription";
import { WhoWeAre } from "./WhoWeAre";

export const AboutPageComponent = () => {
    return (
        <>
            <Banner />
            <div className="page-content">
                <OurDescription />
                <WhoWeAre />
                <Brands />
            </div>
        </>
    );
};
