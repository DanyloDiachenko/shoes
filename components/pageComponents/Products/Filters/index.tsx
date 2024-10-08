import { Brands } from "./Brands";
import { Categories } from "./Categories";
import { Colors } from "./Colors";
import { Price } from "./Price";
import { Size } from "./Size";
import styles from "./styles.module.scss";
import { FiltersProps } from "./filters.props";
import { CleanAllFilters } from "./CleanAllFilters";

export const Filters = ({
    categoriesResponse,
    sizesResponse,
    colorsResponse,
    brandsResponse,
    serverCurrency,
}: FiltersProps) => {
    return (
        <aside className={styles.column}>
            <div className={styles.sidebar}>
                <CleanAllFilters />
                <Categories allCategories={categoriesResponse} />
                <Size allSizes={sizesResponse} />
                <Colors allColors={colorsResponse} />
                <Brands allBrands={brandsResponse} />
                <Price serverCurrency={serverCurrency} />
            </div>
        </aside>
    );
};
