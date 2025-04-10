import { Banner } from "./Banner";
import { Brands } from "./Brands";
import { OurDescription } from "./OurDescription";
import { Team } from "./Team";
import { WhatCustomersSay } from "./WhatCustomersSay";
import { WhoWeAre } from "./WhoWeAre";

export const AboutPageComponent = () => {
    return (
        <>
            <Banner />
            <div className="page-content">
                <OurDescription />
                <WhoWeAre />
                <Brands />
                <hr className="mt-4 mb-6" />
                <Team />
                <WhatCustomersSay />
            </div>
        </>
    );
};
