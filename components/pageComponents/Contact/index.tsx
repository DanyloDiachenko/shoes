import styles from "./styles.module.scss";
import { Banner } from "./Banner";
import { ContactInfoAndQuestions } from "./ContactInfoAndQuestions";
import { OurStores } from "./OurStores";
import { GoogleMap } from "./OurStores/GoogleMap";

export const ContactPageComponent = () => {
    return (
        <>
            <Banner />
            <div className="page-content">
                <div className="container">
                    <ContactInfoAndQuestions />
                    <hr className={styles.divider} />
                    <OurStores />
                </div>
            </div>
            <GoogleMap />
        </>
    );
};
