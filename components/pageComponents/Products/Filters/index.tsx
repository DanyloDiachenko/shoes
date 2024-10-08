import { useDispatch, useSelector } from "react-redux";
import { Brands } from "./Brands";
import { Category } from "./Categories";
import { Color } from "./Color";
import { Price } from "./Price";
import { Size } from "./Size";
import styles from "./styles.module.scss";
import { FiltersProps } from "./filters.props";
import { CleanAll } from "./CleanAll";

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
                <CleanAll />
                <Category allCategories={categoriesResponse} />
                <Size allSizes={sizesResponse} />
                <Color allColors={colorsResponse} />
                <Brands allBrands={brandsResponse} />
                <Price serverCurrency={serverCurrency} />
            </div>
        </aside>
    );
};
