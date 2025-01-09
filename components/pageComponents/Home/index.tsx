import { getProducts } from "@/app/api/products";
import { Advertisement } from "./Advertisement";
import { Categories } from "./Categories";
import { NewArrivals } from "./NewArrivals";
import { Services } from "./Services";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";
import { TopSellingProducts } from "./TopSellingProducts";
import { getCurrency } from "@/helpers/getCurrency";

export const HomePageComponent = async () => {
    const newArrivalProducts = (await getProducts({ categorySlugs: ["new"] }))
        .data;
    const currency = await getCurrency();

    return (
        <>
            <Slider />
            <Advertisement />
            <Services />
            <NewArrivals products={newArrivalProducts} currency={currency} />
            <Categories />
            <div className={styles.marginBottom}></div>
            <TopSellingProducts />
        </>
    );
};
