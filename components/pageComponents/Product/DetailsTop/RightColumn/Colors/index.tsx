import Link from "next/link";
import styles from "./styles.module.scss";
import { ColorsProps } from "./colors.props";

export const Colors = ({ product }: ColorsProps) => {
    return (
        <div className={styles.detailsFilters}>
            <label>Color:</label>
            <div className={styles.colors}>
                <Link href="#" className={styles.active}>
                    <img src={product.mainImage} alt="product desc" />
                </Link>
            </div>
        </div>
    );
};
