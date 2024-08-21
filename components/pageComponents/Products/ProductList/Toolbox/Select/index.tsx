import styles from "./styles.module.scss";
import { IoIosArrowDown } from "react-icons/io";

export const Select = () => {
    return (
        <div className={styles.selectCustom}>
            <select name="sortby" id="sortby" className={styles.formControl}>
                <option value="popularity" selected={true}>
                    Most Popular
                </option>
                <option value="rating">Most Rated</option>
                <option value="date">Date</option>
            </select>
            <IoIosArrowDown className={styles.arrow} />
        </div>
    );
};
