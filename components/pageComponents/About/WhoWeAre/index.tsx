import Link from "next/link";
import styles from "./styles.module.scss";
import { Button } from "@/components/UI/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";

export const WhoWeAre = () => {
    return (
        <div className={styles.whoWeAre}>
            <div className="container">
                <div className="row">
                    <div className={styles.leftColumn}>
                        <h2 className={styles.title}>Who We Are</h2>
                        <p className={styles.descriptionFirst}>
                            Pellentesque odio nisi, euismod pharetra a ultricies{" "}
                            <br />
                            in diam. Sed arcu. Cras consequat
                        </p>
                        <p className={styles.descriptionSecond}>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Suspendisse potenti. Sed egestas, ante et
                            vulputate volutpat, uctus metus libero eu augue.{" "}
                        </p>
                        <Link href="#">
                            <Button
                                colorType="btnOutlinePrimary2"
                                className={styles.button}
                            >
                                <span>VIEW OUR NEWS</span>
                                <IoIosArrowRoundForward />
                            </Button>
                        </Link>
                    </div>
                    <div className={styles.rightColumn}>
                        <div className={styles.images}>
                            <Image
                                src="/images/banners/about-1.jpg"
                                alt="about us"
                                className={styles.imgFront}
                                width={436}
                                height={330}
                            />
                            <Image
                                src="/images/banners/about-2.jpg"
                                alt="about us"
                                className={styles.imgBack}
                                width={276}
                                height={320}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
