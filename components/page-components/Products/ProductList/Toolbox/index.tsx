import { SortSelect } from "./SortSelect";
import styles from "./styles.module.scss";
import { ToolboxProps } from "./toolbox.props";

export const Toolbox = ({
    totalProductsNumber,
    showingProductsNumber,
}: ToolboxProps) => {
    return (
        <div className={styles.toolbox}>
            <div className={styles.toolboxLeft}>
                <div className={styles.toolboxInfo}>
                    Showing{" "}
                    <span>
                        {showingProductsNumber} of {totalProductsNumber}
                    </span>{" "}
                    Products
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
