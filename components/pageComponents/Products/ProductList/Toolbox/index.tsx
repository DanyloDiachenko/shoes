import { SortSelect } from "./SortSelect";
import styles from "./styles.module.scss";

export const Toolbox = () => {
    return (
        <div className={styles.toolbox}>
            <div className={styles.toolboxLeft}>
                <div className={styles.toolboxInfo}>
                    Showing <span>9 of 56</span> Products
                </div>
            </div>
            <div className={styles.toolboxRight}>
                <div className={styles.toolboxSort}>
                    <label htmlFor="sortby">Sort by:</label>
                    <SortSelect />
                </div>
            </div>
        </div>
    );
};
