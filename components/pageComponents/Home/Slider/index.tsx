import SlickSlider from "react-slick";
import styles from "./styles.module.scss";

export const Slider = () => {
    return (
        <div className="container">
            <SlickSlider className={styles.slider}>
                <div className={styles.slide}></div>
            </SlickSlider>
        </div>
    );
};
