import { DetailsTopProps } from "./detailsTop.props";
import { LeftColumn } from "./LeftColumn";
import { RightColumn } from "./RightColumn";
import styles from "./styles.module.scss";

export const DetailsTop = ({ product }: DetailsTopProps) => {
    return (
        <div className={styles.top}>
            <div className="row">
                <LeftColumn product={product} />
                <RightColumn
                    product={product}
                />
            </div>
        </div>
    );
};
