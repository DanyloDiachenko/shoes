import styles from "./styles.module.scss";
import { CheckboxProps } from "./checkbox.props";

export const Checkbox = ({ className, id, title, ...rest }: CheckboxProps) => {
    return (
        <div
            className={`${styles.customControl} ${className ? className : ""}`}
        >
            <input
                type="checkbox"
                className={styles.customControlInput}
                id={id}
                {...rest}
            />
            <label className={styles.customControlLabel} htmlFor={id}>
                {title}
            </label>
        </div>
    );
};
