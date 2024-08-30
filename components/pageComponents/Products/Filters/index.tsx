import { useDispatch, useSelector } from "react-redux";
import { Brand } from "./Brand";
import { Category } from "./Category";
import { Colour } from "./Colour";
import { Price } from "./Price";
import { Size } from "./Size";
import styles from "./styles.module.scss";
import { getCategories } from "@/app/api/categories";

export const Filters = async () => {
    const categoriesResponse = await getCategories();

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
                <Size />
                <Colour />
                <Brand />
                <Price />
            </div>
        </aside>
    );
};
