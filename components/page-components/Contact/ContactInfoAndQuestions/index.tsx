import { ContactInformation } from "./ContactInformation";
import { Questions } from "./Questions";
import styles from "./styles.module.scss";

export const ContactInfoAndQuestions = () => {
    return (
        <div className="row">
            <ContactInformation />
            <Questions />
        </div>
    );
};
