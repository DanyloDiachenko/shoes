import { ButtonProps } from "./button.props";
import styles from "./styles.module.scss";

export const Button = ({
    colorType,
    children,
    className,
    ...rest
}: ButtonProps) => {
    switch (colorType) {
        case "btnPrimary": {
            return (
                <button
                    className={`${styles.btn} ${styles.btnPrimary} ${className}`}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
        case "btnOutlinePrimary2": {
            return (
                <button
                    className={`${styles.btn} ${styles.btnOutlinePrimary2} ${className}`}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
        case "btnOutlineDark2": {
            return (
                <button
                    className={`${styles.btn} ${styles.btnOutlineDark2} ${className}`}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
        case "btnGray": {
            return (
                <button
                    className={`${styles.btn} ${styles.btnGray} ${className}`}
                    {...rest}
                >
                    {children}
                </button>
            );
        }
    }
};
