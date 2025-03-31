import { Banner } from "./Banner";
import { OurDescription } from "./OurDescription";

export const AboutPageComponent = () => {
    return (
        <>
            <Banner />
            <div className="page-content">
                <OurDescription />
            </div>
        </>
    );
};
