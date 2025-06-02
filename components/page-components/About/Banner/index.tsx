import Image from "next/image";
import styles from "./styles.module.scss";

export const Banner = () => {
    return (
        <div className="container">
            <div className={styles.pageHeader}>
                <h1 className={styles.title}>
                    About us<span>Who we are</span>
                </h1>
                <Image
                    src="/images/banners/about.jpg"
                    alt="About us"
                    className={styles.backgroundImage}
                    width={1170}
                    height={450}
                    loading="eager"
                    priority={true}
                />
            </div>
        </div>
    );
};
