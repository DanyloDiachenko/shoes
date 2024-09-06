import { SortSelect } from "./SortSelect";
import styles from "./styles.module.scss";
import { ToolboxProps } from "./toolbox.props";

export const Toolbox = ({ total, count }: ToolboxProps) => {
    return (
        <div className={styles.toolbox}>
            <div className={styles.toolboxLeft}>
                <div className={styles.toolboxInfo}>
                    Showing <span>{count} of {total}</span> Products
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
