import styles from "./styles.module.scss";
import { TruncatedTextProps } from "./TruncatedText.props";

export const TruncatedText = ({ lines, children, className, ...props }: TruncatedTextProps) => {
    return (
        <div
            className={`${styles.truncated} ${className}`}
            style={{
                lineClamp: lines,
                WebkitLineClamp: lines,
            }}
            {...props}
        >
            {children}
        </div>
    );
};
