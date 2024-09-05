import { useDispatch, useSelector } from "react-redux";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Colour } from "./Colour";
import { Price } from "./Price";
import { Size } from "./Size";
import styles from "./styles.module.scss";
import { FiltersProps } from "./filters.props";

export const Filters = ({
    categoriesResponse,
    sizesResponse,
    colorsResponse,
    brandsResponse,
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
                <Colour allColors={colorsResponse} />
                <Brand allBrands={brandsResponse} />
                <Price />
            </div>
        </aside>
    );
};
