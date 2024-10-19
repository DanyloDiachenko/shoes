import { InputProps } from "./input.props";
import styles from "./styles.module.scss";

export const Input = ({ className, ...rest }: InputProps) => {
    return <input className={`${styles.formControl} ${className}`} {...rest} />;
};
