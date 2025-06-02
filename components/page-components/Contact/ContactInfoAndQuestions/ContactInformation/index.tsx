import styles from "./styles.module.scss";
import { IoLocationOutline, IoCalendarOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { LuClock3 } from "react-icons/lu";
import Link from "next/link";

export const ContactInformation = () => {
    return (
        <div className={styles.contactInformation}>
            <h2 className={styles.title}>Contact Information</h2>
            <p className={styles.description}>
                Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
                dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
                dapibus eu, fermentum et, dapibus sed, urna.
            </p>
            <div className="row">
                <div className={styles.largeColumn}>
                    <div className={styles.contactInfo}>
                        <h3>The Office</h3>
                        <ul className={styles.contactList}>
                            <li>
                                <IoLocationOutline />
                                70 Washington Square South New York, NY 10012,
                                United States
                            </li>
                            <li>
                                <BsTelephone />
                                <Link href="tel:#123">+92 423 567</Link>
                            </li>
                            <li>
                                <MdOutlineEmail />
                                <Link href="mailto:#123">info@Molla.com</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.smallColumn}>
                    <div className={styles.contactInfo}>
                        <h3>The Office</h3>
                        <ul className={styles.contactList}>
                            <li>
                                <LuClock3 />
                                <span className={styles.textDark}>
                                    Monday-Saturday
                                </span>{" "}
                                <br />
                                11am-7pm ET
                            </li>
                            <li>
                                <IoCalendarOutline />
                                <span className={styles.textDark}>
                                    Sunday
                                </span>{" "}
                                <br />
                                11am-6pm ET
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
