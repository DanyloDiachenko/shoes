import { FormBox } from "./FormBox";
import styles from "./styles.module.scss";

export const LoginPageComponent = () => {
    return (
        <div className={styles.loginPage}>
            <div className="container">
                <FormBox />
            </div>
        </div>
    );
};
