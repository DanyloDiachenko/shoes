import { ProductDetailsTopLeftColumn } from "./LeftColumn";
import { ProductDetailsTopRightColumn } from "./RightColumn";
import styles from "./styles.module.scss";

export const ProductDetailsTop = () => {
    return (
        <div className={styles.top}>
            <div className="row">
                <ProductDetailsTopLeftColumn />
                <ProductDetailsTopRightColumn />
            </div>
        </div>
    );
};
