import { Button } from "@/components/UI/Button";
import styles from "./advertisement.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Advertisement = () => {
    return (
        <div className="container">
            <div className="row">
                <div className={styles.leftColumn}>
                    <div className="row">
                        <div className={styles.column}>
                            <div className={styles.banner}>
                                <Link href="#" className={styles.bannerLink}>
                                    <Image
                                        src="/images/banners/advertisement-1.png"
                                        alt="Banner"
                                        width={376}
                                        height={250}
                                    />
                                </Link>
                                <div className={styles.bannerContent}>
                                    <h4>New Arrivals</h4>
                                    <h3>
                                        Sneakers &<br /> Athletic Shoes
                                    </h3>
                                    <Button colorType="btnWhite">
                                        Discover Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div
                                className={`${styles.banner} ${styles.bannerLight}`}
                            >
                                <Link href="#" className={styles.bannerLink}>
                                    <Image
                                        src="/images/banners/advertisement-2.png"
                                        alt="Banner"
                                        width={376}
                                        height={250}
                                    />
                                </Link>
                                <div className={styles.bannerContent}>
                                    <h4>Clearance</h4>
                                    <h3>Sandals</h3>
                                    <div className={styles.bannerText}>
                                        up to 70% off
                                    </div>
                                    <Link href="#">
                                        <Button colorType="btnGrayPrimary">
                                            Shop now
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${styles.banner} ${styles.bannerLarge} ${styles.bannerBottom}`}
                    >
                        <Link href="#" className={styles.bannerLink}>
                            <Image
                                src="/images/banners/advertisement-4.png"
                                alt="Banner"
                                width={772}
                                height={250}
                            />
                        </Link>
                        <div className={styles.bannerContent}>
                            <h4 className="banner-subtitle text-white">
                                On Sale
                            </h4>
                            <h3>Slip-On Loafers</h3>
                            <div className={styles.bannerText}>
                                up to 30% off
                            </div>
                            <Link href="#">
                                <Button colorType="btnWhite">Shop Now</Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.rightColumn}>
                    <div className={`${styles.banner} ${styles.bannerLarge}`}>
                        <Link href="#" className={styles.bannerLink}>
                            <Image
                                src="/images/banners/advertisement-3.png"
                                alt="Banner"
                                width={376}
                                height={520}
                            />
                        </Link>
                        <div className={styles.bannerContent}>
                            <h4>On Sale</h4>
                            <h3>
                                Amazing <br /> Lace Up Boots
                            </h3>
                            <div className={styles.bannerText}>from $39.00</div>
                            <Link href="#">
                                <Button colorType="btnWhite">
                                    Discover Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
