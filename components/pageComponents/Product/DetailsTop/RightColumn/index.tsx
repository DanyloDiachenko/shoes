import styles from "./styles.module.scss";
import { ProductDetailsTopRightColumnColors } from "./Colors";
import { ProductDetailsTopRightColumnSizes } from "./Sizes";
import { ProductDetailsTopRightColumnQuantity } from "./Quantity";
import { ProductDetailsTopRightColumnActions } from "./Actions";
import { ProductDetailsTopRightColumnBottom } from "./Bottom";
import { ProductDetailsTopRightColumnInfo } from "./Info";

export const ProductDetailsTopRightColumn = () => {
    return (
        <div className={styles.columnRight}>
            <div className={styles.details}>
                <ProductDetailsTopRightColumnInfo />
                <ProductDetailsTopRightColumnColors />
                <ProductDetailsTopRightColumnSizes />
                <ProductDetailsTopRightColumnQuantity />
                <ProductDetailsTopRightColumnActions />
                <ProductDetailsTopRightColumnActions />
                <ProductDetailsTopRightColumnBottom />
            </div>
        </div>
    );
};
