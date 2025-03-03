import { getProducts } from "@/api/products";
import { Advertisement } from "./Advertisement";
import { Categories } from "./Categories";
import { NewArrivals } from "./NewArrivals";
import { Services } from "./Services";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";
import { TopSellingProducts } from "./TopSellingProducts";
import { getCurrency } from "@/helpers/getCurrency";

export const HomePageComponent = async () => {
    const currency = await getCurrency();

    const newArrivalProducts = (await getProducts({ categorySlugs: ["new"] }))
        .data;
    const topSellingProducts = (
        await getProducts({ categorySlugs: ["bestsellers"] })
    ).data;

    return (
        <>
            <Slider currency={currency} />
            <Advertisement />
            <Services />
            <NewArrivals products={newArrivalProducts} currency={currency} />
            <Categories />
            <div className={styles.marginBottom}></div>
            <TopSellingProducts
                products={topSellingProducts}
                currency={currency}
            />
        </>
    );
};
