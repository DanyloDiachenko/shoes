import styles from "./styles.module.scss";
import { Colors } from "./Colors";
import { Sizes } from "./Sizes";
import { Quantity } from "./Quantity";
import { Actions } from "./Actions";
import { Bottom } from "./Bottom";
import { Info } from "./Info";
import { RightColumnProps } from "./rightColumn.props";
import { getCookieProductsServer } from "@/helpers/getCookieProductsServer";

export const RightColumn = ({ product }: RightColumnProps) => {
    const cookieProducts = getCookieProductsServer() || [];

    return (
        <div className={styles.columnRight}>
            <div className={styles.details}>
                <Info product={product} />
                <Colors product={product} />
                <Sizes product={product} />
                <Quantity product={product} />
                <Actions product={product} cookieProducts={cookieProducts} />
                <Bottom product={product} />
            </div>
        </div>
    );
};
