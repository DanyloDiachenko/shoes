import { LuMail } from "react-icons/lu";
import styles from "./styles.module.scss";

export const WhatNext = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <h2 className={styles.cardTitle}>
                    <LuMail size={22} />
                    What's Next?
                </h2>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.nextSteps}>
                    <div className={styles.stepsList}>
                        <div className={styles.step}>
                            <div className={styles.stepDot}></div>
                            <p>
                                Order confirmation has been sent to your email
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepDot}></div>
                            <p>
                                You'll receive shipping updates via email and
                                SMS
                            </p>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepDot}></div>
                            <p>Track your order in your account dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
