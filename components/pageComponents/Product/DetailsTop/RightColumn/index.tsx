import styles from "./styles.module.scss";
import { Colors } from "./Colors";
import { Sizes } from "./Sizes";
import { Quantity } from "./Quantity";
import { Actions } from "./Actions";
import { Bottom } from "./Bottom";
import { Info } from "./Info";

export const RightColumn = () => {
    return (
        <div className={styles.columnRight}>
            <div className={styles.details}>
                <Info />
                <Colors />
                <Sizes />
                <Quantity />
                <Actions />
                <Bottom />
            </div>
        </div>
    );
};
