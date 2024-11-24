import { Button } from "@/components/UI/Button";
import styles from "./advertisement.module.scss";

export const Advertisement = () => {
    return (
        <div className="container">
            <div className="row">
                <div className={styles.leftColumn}>
                    <div className="row">
                        <div className={styles.column}>
                            <div className={styles.banner}>
                                <a href="">
                                    <img
                                        src="/images/banners/advertisement-1.png"
                                        alt="Banner"
                                    />
                                </a>
                                <div className={styles.bannerContent}>
                                    <h4>
                                        <a href="">New Arrivals</a>
                                    </h4>
                                    <h3>
                                        <a href="">
                                            Sneakers &<br /> Athletic Shoes
                                        </a>
                                    </h3>
                                    <Button colorType="btnWhite">
                                        Discover Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.column}></div>
                    </div>
                    <div className={styles.bannerLarge}></div>
                </div>
                <div className={styles.rightColumn}></div>
            </div>
        </div>
    );
};
