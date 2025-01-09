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
    const newArrivalProductsAll = (
        await getProducts({ categorySlugs: ["new"] })
    ).data;
    const newArrivalProductsMen = (
        await getProducts({ categorySlugs: ["new", "men"] })
    ).data;
    const newArrivalProductsWomen = (
        await getProducts({ categorySlugs: ["new", "women"] })
    ).data;
    const currency = await getCurrency();

    return (
        <>
            <Slider />
            <Advertisement />
            <Services />
            <NewArrivals
                newArrivalProductsAll={newArrivalProductsAll}
                newArrivalProductsMen={newArrivalProductsMen}
                newArrivalProductsWomen={newArrivalProductsWomen}
                currency={currency}
            />
            <Categories />
            <div className={styles.marginBottom}></div>
            <TopSellingProducts />
        </>
    );
};
