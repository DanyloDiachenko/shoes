import { getProducts } from "@/api/products";
import { Advertisement } from "./Advertisement";
import { Categories } from "./Categories";
import { NewArrivals } from "./NewArrivals";
import { Services } from "./Services";
import { Slider } from "./Slider";
import styles from "./styles.module.scss";
import { TopSellingProducts } from "./TopSellingProducts";
import { getCurrency } from "@/helpers/getCurrency";
import { Product } from "@/interfaces/entities/product.interface";

export const HomePageComponent = async () => {
    const currency = await getCurrency();

    let newArrivalProducts: Product[] = [];
    let topSellingProducts: Product[] = [];
    const newArrivalProductsResponse = await getProducts({
        categorySlugs: ["new"],
    });
    if ("data" in newArrivalProductsResponse) {
        newArrivalProducts = newArrivalProductsResponse.data;
    }
    
    const topSellingProductsResponse = await getProducts({
        categorySlugs: ["bestsellers"],
    });
    if ("data" in topSellingProductsResponse) {
        topSellingProducts = topSellingProductsResponse.data;
    }

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
