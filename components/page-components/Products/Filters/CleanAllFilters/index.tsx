import { useDispatch } from "react-redux";
import styles from "./styles.module.scss";
import {
    setBrands,
    setCategories,
    setColor,
    setPriceEur,
    setPriceUah,
    setSizes,
    setSortBy,
} from "@/store/slices/productsSettings";

export const CleanAllFilters = () => {
    const dispatch = useDispatch();

    const onCleanAllClick = () => {
        dispatch(setCategories([]));
        dispatch(setSizes([]));
        dispatch(setColor(null));
        dispatch(setBrands([]));
        dispatch(setPriceUah({ min: 0, max: 10000 }));
        dispatch(setPriceEur({ min: 0, max: 1000 }));
        dispatch(setSortBy("mostPopular"));
    };

    return (
        <div className={styles.widgetClean}>
            <label>Filters:</label>
            <button className={styles.clear} onClick={onCleanAllClick}>
                Clean All
            </button>
        </div>
    );
};
