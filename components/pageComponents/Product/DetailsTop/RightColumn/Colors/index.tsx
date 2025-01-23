import Link from "next/link";
import styles from "./styles.module.scss";
import { ColorsProps } from "./colors.props";
import Image from "next/image";

export const Colors = ({ product }: ColorsProps) => {
    return (
        <div className={styles.detailsFilters}>
            <label>Color:</label>
            <div className={styles.colors}>
                <Link href="#" className={styles.active}>
                    <Image
                        src={product.mainImage}
                        alt="product desc"
                        width={0}
                        height={0}
                        sizes="100vw"
                    />
                </Link>
            </div>
        </div>
    );
};
