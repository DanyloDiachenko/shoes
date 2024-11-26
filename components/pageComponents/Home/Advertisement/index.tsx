import { Button } from "@/components/UI/Button";
import styles from "./advertisement.module.scss";
import Link from "next/link";

export const Advertisement = () => {
    return (
        <div className="container">
            <div className="row">
                <div className={styles.leftColumn}>
                    <div className="row">
                        <div className={styles.column}>
                            <div className={styles.banner}>
                                <Link href="" className={styles.bannerLink}>
                                    <img
                                        src="/images/banners/advertisement-1.png"
                                        alt="Banner"
                                    />
                                </Link>
                                <div className={styles.bannerContent}>
                                    <h4>
                                        <Link href="">New Arrivals</Link>
                                    </h4>
                                    <h3>
                                        <Link href="">
                                            Sneakers &<br /> Athletic Shoes
                                        </Link>
                                    </h3>
                                    <Button colorType="btnWhite">
                                        Discover Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={`${styles.banner} ${styles.bannerLight}`}>
                                <Link href="" className={styles.bannerLink}>
                                    <img
                                        src="/images/banners/advertisement-1.png"
                                        alt="Banner"
                                    />
                                </Link>
                                <div className={styles.bannerContent}>
                                    <h4>
                                        <Link href="">Clearance</Link>
                                    </h4>
                                    <h3>
                                        <Link href="">Sandals</Link>
                                    </h3>
                                    <div className={styles.bannerText}>
                                        <Link href="#">up to 70% off</Link>
                                    </div>
                                    <Button colorType="btnWhite">
                                        Shop now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bannerLarge}></div>
                </div>
                <div className={styles.rightColumn}></div>
            </div>
        </div>
    );
};
