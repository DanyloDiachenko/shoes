import { Brands } from "./Brands";
import { Categories } from "./Categories";
import { Colors } from "./Colors";
import { PriceRange } from "./PriceRange";
import { Size } from "./Size";
import styles from "./styles.module.scss";
import { FiltersProps } from "./filters.props";
import { CleanAllFilters } from "./CleanAllFilters";

export const Filters = ({
    getBrandsResponseServer,
    getCategoriesResponseServer,
    getColorsResponseServer,
    getSizesResponseServer,
    currency,
}: FiltersProps) => {
    return (
        <aside className={styles.column}>
            <div className={styles.sidebar}>
                <CleanAllFilters />
                <Categories categories={getCategoriesResponseServer} />
                <Size sizes={getSizesResponseServer} />
                <Colors colors={getColorsResponseServer} />
                <Brands brands={getBrandsResponseServer} />
                <PriceRange currency={currency} />
            </div>
        </aside>
    );
};
