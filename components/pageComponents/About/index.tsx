import { Banner } from "./Banner";
import { Brands } from "./Brands";
import { OurDescription } from "./OurDescription";
import { Team } from "./Team";
import { WhoWeAre } from "./WhoWeAre";

export const AboutPageComponent = () => {
    return (
        <>
            <Banner />
            <div className="page-content">
                <OurDescription />
                <WhoWeAre />
                <Brands />
                <Team />
            </div>
        </>
    );
};
