import { Button } from "@/components/UI/Button";
import styles from "./styles.module.scss";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export const CtaIfQuestions = () => {
    return (
        <div className={styles.cta}>
            <div className="container">
                <div className={`row ${styles.row}`}>
                    <div className={styles.mainColumn}>
                        <div className={`row ${styles.content}`}>
                            <div className={styles.leftColumn}>
                                <h3 className={styles.ctaTitle}>
                                    If You Have More Questions
                                </h3>
                                <p className={styles.ctaDesc}>
                                    Quisque volutpat mattis eros
                                </p>
                            </div>
                            <div className={styles.rightColumn}>
                                <Link href="/contact" >
                                    <Button
                                        tabIndex={-1}
                                        className={styles.btn}
                                        colorType="btnWhite"
                                    >
                                        <span>CONTACT US</span>
                                        <FaArrowRightLong size={14} />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
