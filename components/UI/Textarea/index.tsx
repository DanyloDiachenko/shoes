import { TextareaProps } from "./textarea.props";
import styles from "./styles.module.scss";

export const Textarea = ({ className, ...rest }: TextareaProps) => {
    return <textarea className={`${styles.textarea} ${className}`} {...rest} />;
};
