import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { SelectProps } from "./select.props";
import { ChangeEvent } from "react";

export const Select = ({
    options,
    setActiveOption,
    activeOption,
    id,
    className,
}: SelectProps) => {
    const onOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = options.find(
            (option) => option.value === event.target.value
        );
        if (selectedOption) {
            setActiveOption(selectedOption);
        }
    };

    return (
        <div className={`${styles.selectCustom} ${className || ""}`}>
            <select
                name={id}
                id={id}
                className={styles.formControl}
                value={activeOption.value}
                onChange={onOptionChange}
            >
                {options.map((option, index) => (
                    <option value={option.value} key={index}>
                        {option.label}
                    </option>
                ))}
            </select>
            <IoIosArrowDown className={styles.arrow} />
        </div>
    );
};
