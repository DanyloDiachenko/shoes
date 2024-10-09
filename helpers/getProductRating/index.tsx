import { FaStar } from "react-icons/fa";
import styles from "./styles.module.scss";

const MAX_RATING = 5;

export const getProductRating = (rating: number) => {
    return (
        <div className={styles.ratings}>
            {[...Array(MAX_RATING)].map((_, index) => (
                <FaStar
                    key={index}
                    className={index < rating ? styles.active : ""}
                />
            ))}
        </div>
    );
};
