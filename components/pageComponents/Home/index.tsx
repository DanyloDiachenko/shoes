import { Advertisement } from "./Advertisement";
import { NewArrivals } from "./NewArrivals";
import { Services } from "./Services";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";

export const HomePageComponent = () => {
    return (
        <>
            <Slider />
            <Advertisement />
            <Services />
            <NewArrivals />
        </>
    );
};
