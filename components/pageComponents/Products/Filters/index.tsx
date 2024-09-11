import { useDispatch, useSelector } from "react-redux";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Color } from "./Color";
import { Price } from "./Price";
import { Size } from "./Size";
import styles from "./styles.module.scss";
import { FiltersProps } from "./filters.props";

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
                <div className={styles.widgetClean}>
                    <label>Filters:</label>
                    <a href="#" className={styles.clear}>
                        Clean All
                    </a>
                </div>
                <Category allCategories={categoriesResponse} />
                <Size allSizes={sizesResponse} />
                <Color allColors={colorsResponse} />
                <Brand allBrands={brandsResponse} />
                <Price serverCurrency={serverCurrency} />
            </div>
        </aside>
    );
};
