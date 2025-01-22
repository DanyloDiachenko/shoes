import Image from "next/image";
import { Links } from "./Links";
import { Socials } from "./Socials";
import styles from "./styles.module.scss";

const currentYear = new Date().getFullYear();

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerMiddle}>
                <div className={`container ${styles.container}`}>
                    <div className={styles.row}>
                        <div className={styles.column}>
                            <div className={styles.widget}>
                                <Image
                                    src="/images/icons/logo.png"
                                    className={styles.footerLogo}
                                    alt="Footer Logo"
                                    width="105"
                                    height="25"
                                />
                                <p>
                                    Praesent dapibus, neque id cursus ucibus,
                                    tortor neque egestas augue, eu vulputate
                                    magna eros eu erat.
                                </p>
                                <Socials />
                            </div>
                        </div>
                        <Links />
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <div className={`container ${styles.bottomContainer}`}>
                    <p className={styles.footerCopyright}>
                        Copyright © {currentYear} Molla Store. All Rights
                        Reserved.
                    </p>
                    <figure className={styles.footerPayments}>
                        <Image
                            src="/images/icons/payments.png"
                            alt="Payment methods"
                            width="272"
                            height="20"
                        />
                    </figure>
                </div>
            </div>
        </footer>
    );
};
