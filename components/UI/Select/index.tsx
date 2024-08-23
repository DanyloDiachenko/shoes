import { IoIosArrowDown } from "react-icons/io";
import styles from "./styles.module.scss";
import { SelectProps } from "./select.props";

export const Select = ({
    options,
    onOptionChange,
    activeOption,
}: SelectProps) => {
    return (
        <div className={styles.selectCustom}>
            <select
                name="sortby"
                id="sortby"
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
