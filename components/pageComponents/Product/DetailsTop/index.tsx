import { LeftColumn } from "./LeftColumn";
import { RightColumn } from "./RightColumn";
import styles from "./styles.module.scss";

export const DetailsTop = () => {
    return (
        <div className={styles.top}>
            <div className="row">
                <LeftColumn />
                <RightColumn />
            </div>
        </div>
    );
};
