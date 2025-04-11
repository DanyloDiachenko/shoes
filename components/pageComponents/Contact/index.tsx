import { Banner } from "./Banner";
import { ContactInfoAndQuestions } from "./ContactInfoAndQuestions";

export const ContactPageComponent = () => {
    return (
        <>
            <Banner />
            <div className="page-content">
                <div className="container">
                    <ContactInfoAndQuestions />
                </div>
            </div>
        </>
    );
};
