import { FormBox } from "./FormBox";
import styles from "./styles.module.scss";

export const LoginPageComponent = () => {
    return (
        <div
            className={styles.loginPage}
            style={{
                backgroundImage: "url('/images/banners/login-bg.png')",
            }}
        >
            <div className="container">
                <FormBox />
            </div>
        </div>
    );
};
