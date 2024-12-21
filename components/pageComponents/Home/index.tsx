import { Advertisement } from "./Advertisement";
import { Categories } from "./Categories";
import { HomeProps } from "./home.props";
import { NewArrivals } from "./NewArrivals";
import { Services } from "./Services";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";

export const HomePageComponent = ({ categories }: HomeProps) => {
    return (
        <>
            <Slider />
            <Advertisement />
            <Services />
            <NewArrivals />
            <Categories categories={categories} />
        </>
    );
};
