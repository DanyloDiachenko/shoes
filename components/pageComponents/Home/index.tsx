import { Advertisement } from "./Advertisement";
import { Categories } from "./Categories";
import { NewArrivals } from "./NewArrivals";
import { Services } from "./Services";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";
import { TopSellingProducts } from "./TopSellingProducts";

export const HomePageComponent = () => {
    return (
        <>
            <Slider />
            <Advertisement />
            <Services />
            <NewArrivals />
            <Categories />
            <div className={styles.marginBottom}></div>
            <TopSellingProducts />
        </>
    );
};
