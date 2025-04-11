import styles from "./styles.module.scss";
import Image from "next/image";

export const Banner = () => {
    return (
        <div className={`${styles.banner} container`}>
            <div className={styles.pageHeader}>
                <h1 className={styles.title}>
                    Contact us
                    <span className={styles.subtitle}>
                        keep in touch with us
                    </span>
                </h1>
                <Image
                    src="/images/banners/contact.png"
                    alt="Contact"
                    width={1170}
                    height={450}
                    className={styles.image}
                />
            </div>
        </div>
    );
};
