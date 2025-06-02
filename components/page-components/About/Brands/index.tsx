import Link from "next/link";
import styles from "./styles.module.scss";
import { brands } from "@/data/brands";
import Image from "next/image";

export const Brands = () => {
    return (
        <div className={`${styles.brands} container`}>
            <div className="row">
                <div className={styles.wrapper}>
                    <div className={styles.brandsText}>
                        <h2 className={styles.title}>
                            The world's premium design brands in one
                            destination.
                        </h2>
                        <p>
                            Phasellus hendrerit. Pellentesque aliquet nibh nec
                            urna. In nisi neque, aliquet vel, dapibus id, mattis
                            vel, nis
                        </p>
                    </div>
                    <div className={styles.brandsDisplay}>
                        <div className={`${styles.content} row`}>
                            {brands.map((brand, index) => (
                                <div className={styles.column} key={index}>
                                    <Link href="#" className={styles.brand}>
                                        <Image
                                            src={brand.image}
                                            alt={brand.title}
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
