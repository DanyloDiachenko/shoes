import styles from "./styles.module.scss";
import { Colors } from "./Colors";
import { Sizes } from "./Sizes";
import { Quantity } from "./Quantity";
import { Actions } from "./Actions";
import { Bottom } from "./Bottom";
import { Info } from "./Info";
import { RightColumnProps } from "./rightColumn.props";

export const RightColumn = ({ product }: RightColumnProps) => {
    return (
        <div className={styles.columnRight}>
            <div className={styles.details}>
                <Info product={product} />
                <Colors product={product} />
                <Sizes product={product} />
                <Quantity product={product} />
                <Actions />
                <Bottom product={product} />
            </div>
        </div>
    );
};
