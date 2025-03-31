import { Banner } from "./Banner";
import { OurDescription } from "./OurDescription";
import { WhoWeAre } from "./WhoWeAre";

export const AboutPageComponent = () => {
    return (
        <>
            <Banner />
            <div className="page-content">
                <OurDescription />
                <WhoWeAre />
            </div>
        </>
    );
};
