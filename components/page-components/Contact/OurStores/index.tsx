import Link from "next/link";
import styles from "./styles.module.scss";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "@/components/UI/Button";
import Image from "next/image";
import { stores } from "@/data/stores";
import { OurStoresProps } from "./OurStores.props";

export const OurStores = ({ onViewStoreOnMapClick }: OurStoresProps) => {
    return (
        <div className={styles.stores}>
            <h2 className={styles.title}>Our Stores</h2>
            <div className="row">
                {stores.map((store, index) => (
                    <div className={styles.column} key={index}>
                        <div className={styles.store}>
                            <div className="row">
                                <div className={styles.mediaColumn}>
                                    <figure className={styles.storeMedia}>
                                        <Image
                                            src={store.image}
                                            alt={store.title}
                                            width={277}
                                            height={277}
                                        />
                                    </figure>
                                </div>
                                <div className={styles.textColumn}>
                                    <div className={styles.storeContent}>
                                        <h3 className={styles.storeTitle}>
                                            {store.title}
                                        </h3>
                                        <address>{store.address}</address>
                                        <Link href={`tel:${store.phone}`}>
                                            {store.phone}
                                        </Link>
                                        <h4 className={styles.storeSubtitle}>
                                            Store Hours:
                                        </h4>
                                        {store.wordDaysAndHours.map(
                                            (day, index) => (
                                                <div key={index}>
                                                    {day.day} - {day.hours}
                                                </div>
                                            )
                                        )}
                                        <Button
                                            className={styles.buttonLink}
                                            colorType="btnOutlinePrimary2"
                                            onClick={() =>
                                                onViewStoreOnMapClick(
                                                    store.lng,
                                                    store.lat
                                                )
                                            }
                                        >
                                            <span>View Map</span>
                                            <IoIosArrowRoundForward size={20} />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
